"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useStudentsStore } from "@/stores/students-store";
import { ArrowLeftIcon } from "@/components/SvgIcons/ArrowLeftIcon";
import { GetStudent } from "@/api/StudentHttp";
import { Students } from "@/components/Students";
import s from "./page.module.scss";
import Link from "next/link";

interface Props {
  params: {
    title: string;
  };
}

export default function PageStudents({ params }: Props) {
  const [title, setTitle] = useState<string>(''); // Используем useState для title
  const setStudents = useStudentsStore((state) => state.setStudents);
  const setLoading = useStudentsStore((state) => state.setLoading);
  const isLoading = useStudentsStore((state) => state.isLoading);
  
  useEffect(() => {
    if (params && params.title) {
      setTitle(params.title); 
    }
  }, [params]);

  useEffect(() => {
    (async () => {
      const data = await GetStudent();
      if (Array.isArray(data)) {
        setStudents(data);
        setLoading(false);
      }
    })();
  }, [setStudents, setLoading]);

  return (
    <div className={s.page}>
      <main className={s.main}>
        <div className={s.titleWrapper}>
          <Link className={s.arrow} href={"/"}>
            <ArrowLeftIcon />
          </Link>

          <h2 className={s.title}>{decodeURIComponent(title)}</h2>
        </div>
        {!isLoading ? (
          <Students />
        ) : (
          <div className={s.preloader}>
            <span>Loading...</span>
          </div>
        )}
      </main>
    </div>
  );
}

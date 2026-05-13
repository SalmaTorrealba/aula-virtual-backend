"use client";

import "./course-card.css";

interface CourseCardProps {
  title: string;
  progress: number;
  img: string;
  onContinue: () => void;
}
export default function CourseCard({
  title,
  progress,
  img
}: {
  title: string;
  progress: number;
  img: string;
}) {
  return (
    <div className="course-card">
      <div
        className="course-img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      <div className="course-body">
        <strong>{title}</strong>

        <div className="progress-wrap">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <button className="view-btn">CONTINUAR</button>
      </div>
    </div>
  );
}

import React, { useState } from "react";

interface TestProps {}

export const Test: React.FC<TestProps> = ({}) => {
  const [submissions, setSubmissions] = React.useState([
    {
      id: 1,
      title: "Spaghetti Bolognese",
      desc: "Ein Nudelgericht mit Hackfleischsoße.",
      votes: 16,
      author: "Italien",
      img: "https://via.placeholder.com/64",
    },
    {
      id: 2,
      title: "Wiener Schnitzel",
      desc: "Ein dünnes Schnitzel aus Kalbfleisch.",
      votes: 5,
      author: "Österreich",
      img: "https://via.placeholder.com/64",
    },
    {
      id: 3,
      title: "Peking-Ente",
      desc: "Das kaiserliche Gericht.",
      votes: 20,
      author: "China",
      img: "https://via.placeholder.com/64",
    },
    {
      id: 4,
      title: "Gulasch",
      desc: "Ein traditionelles Ragout.",
      votes: 24,
      author: "Ungarn",
      img: "https://via.placeholder.com/64",
    },
  ]);

  return submissions
    .sort((a, b) => b.votes - a.votes)
    .map((submission) => (
      <div
        key={submission.id}
        onClick={() =>
          setSubmissions(
            submissions.map((s) =>
              submission.id === s.id ? { ...s, votes: s.votes + 1 } : s,
            ),
          )
        }
      >
        {submission.title} {submission.votes}
      </div>
    ));
};

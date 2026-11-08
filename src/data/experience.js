
export const experiences = [
  {
    id: "sodemy",
    company: "Somali Academy (SODEMY)",
    role: "Camera Operator & Video Editor",
    employmentType: "",
    location: "Somalia",
    startYear: 2025,
    endYear: 2026,
    description:
      "Created and edited visual content for Somali Academy, focusing on social media advertising and short-form promotional videos.",
    responsibilities: [
      "Camera operation and video production",
      "Video editing and post-production",
      "Social media advertisements",
      "Promotional reels and short-form content",
    ],
    tools: [],
    logo: "",
  },
  {
    id: "voiceup",
    company: "VoiceUp Creative",
    role: "Multimedia Specialist",
    employmentType: "",
    location: "Somalia",
    startYear: 2024,
    endYear: 2025,
    description:
      "Worked on promotional videos, documentaries, and creative client productions.",
    responsibilities: [
      "Designed and edited promotional videos",
      "Contributed creative ideas to video projects",
      "Produced documentary and client content",
      "Managed live project shoots",
    ],
    tools: [],
    logo: "",
  },
  {
    id: "infinity",
    company: "Infinity Solution",
    role: "Creative Video Editor & Short Film Developer",
    employmentType: "",
    location: "Somalia",
    startYear: 2023,
    endYear: 2024,
    description:
      "Produced visual stories, documentaries, and short films from initial concept to final edit.",
    responsibilities: [
      "Developed creative video concepts",
      "Produced documentaries and short films",
      "Edited professional video content",
      "Managed post-production workflows",
    ],
    tools: [],
    logo: "",
  },
  {
    id: "turkey-studio",
    company: "Turkey Studio",
    role: "Video Editor & Camera Operator",
    employmentType: "",
    location: "Somalia",
    startYear: 2022,
    endYear: 2023,
    description:
      "Worked on documentary productions, wedding videos, and advertising projects.",
    responsibilities: [
      "Camera operation and video recording",
      "Documentary and wedding production",
      "Editing promotional advertisements",
      "Creating engaging client videos",
    ],
    tools: [],
    logo: "",
  },
];

// Displays known employment dates without guessing months.
export function formatExperiencePeriod(experience) {
  const start =
    experience.startDate?.slice(0, 7) ??
    String(experience.startYear);

  const end = experience.endDate
    ? experience.endDate.slice(0, 7)
    : experience.endYear
      ? String(experience.endYear)
      : "Present";

  return `${start} — ${end}`;
}

export function getExperienceDuration(experience) {
  // Exact month-based duration is available only if
  // both full start/end dates are provided.
  if (!experience.startDate || !experience.endDate) {
    return null;
  }

  const start = new Date(`${experience.startDate.slice(0, 7)}-01`);
  const end = new Date(`${experience.endDate.slice(0, 7)}-01`);

  if (
    Number.isNaN(start.getTime()) ||
    Number.isNaN(end.getTime())
  ) {
    return null;
  }

  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth();

  if (totalMonths < 0) return null;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];

  if (years) {
    parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  }

  if (months) {
    parts.push(`${months} ${months === 1 ? "month" : "months"}`);
  }

  return parts.join(" ") || "Less than a month";
}

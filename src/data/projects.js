
export const projectCategories = [
  "All",
  "Healthcare",
  "Medical Organizations",
  "Community & Media",
];

export const projects = [
  {
    id: "mogadishu-cluster",
    slug: "mogadishu-cluster",
    title: "Mogadishu Cluster",
    client: "Mogadishu Cluster",
    category: "Healthcare",
    type: "Video Production",
    featured: true,
    featuredOrder: 1,
    description:
      "A collection of video projects for Mogadishu Cluster, presented as part of Hussein Tifow's multimedia portfolio.",
    thumbnail: "",
    videos: [
      {
        id: "cluster-video-1",
        title: "Featured Video",
        url: "https://www.facebook.com/share/v/1CxH8oHqse/",
      },
      {
        id: "cluster-video-2",
        title: "Video 2",
        url: "https://www.facebook.com/share/v/1cyzHFcjmg/",
      },
      {
        id: "cluster-video-3",
        title: "Video 3",
        url: "https://www.facebook.com/share/v/19wvoAeoJa/",
      },
    ],
  },
  {
    id: "guuled-hospital",
    slug: "guuled-hospital",
    title: "Guuled Hospital",
    client: "Guuled Hospital",
    category: "Healthcare",
    type: "Video Production",
    featured: true,
    featuredOrder: 2,
    description:
      "Selected multimedia and video projects associated with Guuled Hospital.",
    thumbnail: "",
    videos: [
      {
        id: "guuled-video-1",
        title: "Featured Video",
        url: "https://www.facebook.com/dr.guleed/videos/1755167718545161/",
      },
      {
        id: "guuled-video-2",
        title: "Video 2",
        url: "https://www.facebook.com/share/v/1FsskKGU5D/",
      },
      {
        id: "guuled-video-3",
        title: "Video 3",
        url: "https://www.facebook.com/share/v/19w2Y5SBBT/",
      },
      {
        id: "guuled-video-4",
        title: "Video 4",
        url: "https://www.facebook.com/share/v/1FnShsXmHK/",
      },
      {
        id: "guuled-video-5",
        title: "Video 5",
        url: "https://www.facebook.com/share/v/1EEr4uB3fF/",
      },
    ],
  },
  {
    id: "mogadishu-heart-center",
    slug: "mogadishu-heart-center",
    title: "Mogadishu Heart Center",
    client: "Mogadishu Heart Center",
    category: "Healthcare",
    type: "Video Production",
    featured: true,
    featuredOrder: 3,
    description:
      "Video projects and multimedia content associated with Mogadishu Heart Center.",
    thumbnail: "",
    videos: [
      {
        id: "heart-video-1",
        title: "Featured Video",
        url: "https://www.facebook.com/share/v/1KAfsM9Qpp/",
      },
      {
        id: "heart-video-2",
        title: "Video 2",
        url: "https://www.facebook.com/share/v/1VPE8xcoaM/",
      },
      {
        id: "heart-video-3",
        title: "Video 3",
        url: "https://www.facebook.com/share/v/1Mqt7v7LPp/",
      },
    ],
  },
  {
    id: "somali-medical-association",
    slug: "somali-medical-association",
    title: "Somali Medical Association",
    client: "Somali Medical Association",
    category: "Medical Organizations",
    type: "Video Production",
    featured: true,
    featuredOrder: 4,
    description:
      "Selected multimedia projects presented for the Somali Medical Association.",
    thumbnail: "",
    videos: [
      {
        id: "sma-video-1",
        title: "Featured Video",
        url: "https://www.facebook.com/share/v/1CRVThDRPq/",
      },
      {
        id: "sma-video-2",
        title: "Video 2",
        url: "https://www.facebook.com/SomaliMedicalAssociation1/videos/498075123191627/",
      },
    ],
  },
  {
    id: "somali-dialogue-center",
    slug: "somali-dialogue-center",
    title: "Somali Dialogue Center",
    client: "Somali Dialogue Center",
    category: "Community & Media",
    type: "Video Production",
    featured: true,
    featuredOrder: 5,
    description:
      "Video projects and visual communications work shared for the Somali Dialogue Center.",
    thumbnail: "",
    videos: [
      {
        id: "dialogue-video-1",
        title: "Featured Video",
        url: "https://www.facebook.com/share/v/1C1tY4PD1k/",
      },
      {
        id: "dialogue-video-2",
        title: "Video 2",
        url: "https://www.facebook.com/share/v/1TumZSmi37/",
      },
      {
        id: "dialogue-video-3",
        title: "Video 3",
        url: "https://www.facebook.com/share/v/1C4whJZ6oz/",
      },
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 5) {
  return projects
    .filter((project) => project.featured)
    .sort((a, b) => a.featuredOrder - b.featuredOrder)
    .slice(0, limit);
}

export function getFeaturedVideo(project) {
  return project.videos?.[0] ?? null;
}

export function getProjectVideoCount(project) {
  return project.videos?.length ?? 0;
}

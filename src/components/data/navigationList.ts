interface Navigation {
  id: number;
  title: string;
  url: string;
}

export const NavigationList: Navigation[] = [
  {
    id: 1,
    title: "Home",
    url: "/homepage",
  },
  {
    id: 2,
    title: "Find videos",
    url: "/findVideos",
  },
];

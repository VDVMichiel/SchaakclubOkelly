export enum SelectedPage{
    Home = "home",
    OverOns = "overons",
    Blog = "blog",
    Agenda = "agenda",
    Lokaal = "lokaal",
    Contact = "contact",
  }

  export interface oorsprongType {
    id: string;
    icon: JSX.Element;
    title: string;
    description: string;
  } 
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Box,
  Container,
  Globe,
  Home,
  Info,
  Minus,
  Play,
  Server,
  Settings,
  Square,
  CircleStop,
  RefreshCw,
  X,
  Search,
  Plus,
  ChevronRight,
  CircleCheckBig,
} from "lucide-react";

export default function DampAppServices() {
  return (
    <div
      className="flex w-full h-full select-none bg-fd-background relative overflow-hidden"
    >
      {/* Sidebar - Icon Only */}
      <div className="group peer text-fd-foreground h-full">
        <div className="relative h-full w-12 flex border-r">
          <div className="bg-sidebar flex h-full w-full flex-col">
            {/* Sidebar Header - Icon Only */}
            <div className="flex flex-col gap-2 p-2">
              <div className="flex items-center justify-center w-8 h-8 bg-fd-primary text-fd-primary-foreground rounded-md">
                <Box className="size-4" />
              </div>
            </div>

            {/* Sidebar Content - Icons Only */}
            <div className="flex min-h-0 flex-1 flex-col gap-2 px-2">
              <nav className="space-y-2">
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
                  title="Dashboard"
                >
                  <Home className="size-4" />
                </button>
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors bg-fd-accent"
                  title="Services"
                >
                  <Server className="size-4" />
                </button>
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors relative hover:bg-fd-accent hover:text-fd-accent-foreground"
                  title="Sites"
                >
                  <Globe className="size-4" />
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-[10px] bg-fd-secondary text-fd-secondary-foreground border-transparent inline-flex items-center justify-center">
                    4
                  </Badge>
                </button>
              </nav>

              <nav className="mt-auto space-y-2">
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
                  title="Settings"
                >
                  <Settings className="size-4" />
                </button>
                <button 
                  className="h-8 rounded-md flex items-center p-2 justify-center transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
                  title="About"
                >
                  <Info className="size-4" />
                </button>
              </nav>
            </div>

            {/* Sidebar Footer - Icon Only */}
            <div className="p-2">
              <button className="w-full flex items-center justify-center p-2 rounded-md hover:bg-fd-accent/50 transition-colors">
                <div className="relative">
                  <Container className="size-4" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-background bg-emerald-500 animate-pulse shadow-emerald-500/50 shadow-lg" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="bg-fd-background relative flex w-full flex-1 flex-col overflow-y-hidden">
        {/* Header */}
        <header className="flex h-14 shrink-0 items-center gap-2 top-0 z-30">
          <div className="flex items-center gap-2 px-4">
            <button className="rounded-md">
              <div className="flex items-center gap-2">
                <div className="grid flex-1 text-left leading-tight">
                  <span className="truncate text-xs font-semibold">DAMP</span>
                  <span className="truncate text-xs text-fd-muted-foreground capitalize">
                    services
                  </span>
                </div>
              </div>
            </button>
          </div>

          <div className="ml-auto flex items-center gap-3 mr-2">
            <button
              className="h-8 w-8 rounded-md hover:bg-fd-muted/80 transition-colors duration-150 inline-flex items-center justify-center"
              aria-label="Minimize window"
            >
              <Minus className="h-4 w-4" />
            </button>
            <button
              className="h-8 w-8 rounded-md hover:bg-fd-muted/80 transition-colors duration-150 inline-flex items-center justify-center"
              aria-label="Maximize window"
            >
              <Square className="h-4 w-4" />
            </button>
            <button
              className="h-8 w-8 rounded-md hover:bg-red-500 hover:text-white dark:hover:bg-red-600 dark:hover:text-white transition-colors duration-150 inline-flex items-center justify-center"
              aria-label="Close window"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Services Content */}
        <div className="flex flex-col h-[calc(100vh-4rem)]">
          {/* Search Bar */}
          <div className="relative border-y">
            <input 
              className="flex w-full min-w-0 px-3 py-1 text-xs shadow-xs outline-none pt-4 pb-4 pl-12 pr-2 h-10 focus-visible:ring-0 border-0"
              placeholder="Search services..."
              value=""
              readOnly
            />
            <Search className="pointer-events-none absolute top-1/2 left-6 size-4 -translate-y-1/2 opacity-50 select-none" />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-3 h-full max-h-full pt-4 p-6">
            <div className="col-span-3 flex flex-col gap-4 overflow-hidden">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold">Manage Services</h1>
                    <p className="text-muted-foreground mt-1 text-xs">
                      View, install, and control services for your local development environment.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="cursor-pointer inline-flex items-center font-medium text-fd-accent-foreground border hover:bg-accent rounded-md px-2.5 gap-1.25 text-xs h-8">
                      <RefreshCw className="h-4 w-4 mr-2 group-hover:animate-spin" />
                      Refresh
                    </button>
                    <button className="cursor-pointer inline-flex items-center font-medium text-fd-accent-foreground border hover:bg-accent rounded-md px-2.5 gap-1.25 text-xs h-8">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Service
                    </button>
                  </div>
                </div>
              </div>

              {/* Tabs and Content */}
              <div className="flex-1 flex flex-col min-h-0">
                <div className="w-full h-full flex flex-col gap-4">
                  {/* Tab List */}
                  <div className="bg-fd-muted text-fd-muted-foreground inline-flex w-fit items-center justify-center rounded-lg p-[3px] h-8 flex-shrink-0">
                    <button data-state="active" className="dark:data-[state=active]:text-fd-foreground  flex-1 gap-1.5 data-[state=active]:bg-fd-background data-[state=active]:text-fd-secondary-foreground hover:text-fd-muted-foreground/70 inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap">
                      All
                    </button>
                    <button className="flex-1 gap-1.5 hover:text-muted-foreground/70 inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap">
                      Web Servers
                    </button>
                    <button className="flex-1 gap-1.5 hover:text-muted-foreground/70 inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap">
                      Databases
                    </button>
                    <button className="flex-1 gap-1.5 hover:text-muted-foreground/70 inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap">
                      Email
                    </button>
                    <button className="flex-1 gap-1.5 hover:text-muted-foreground/70 inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap">
                      Cache
                    </button>
                    <button className="flex-1 gap-1.5 hover:text-muted-foreground/70 inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap">
                      Search
                    </button>
                    <button className="flex-1 gap-1.5 hover:text-muted-foreground/70 inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap">
                      Storage
                    </button>
                    <button className="flex-1 gap-1.5 hover:text-muted-foreground/70 inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap">
                      Queue
                    </button>
                    <button className="flex-1 gap-1.5 hover:text-muted-foreground/70 inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap">
                      Other
                    </button>
                  </div>

                  {/* Services List */}
                  <div className="flex-1 overflow-y-auto min-h-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="relative h-full">
                      <div className="size-full rounded-[inherit]">
                        <div style={{ minWidth: "100%", display: "table" }}>
                          <div className="space-y-2 pr-3">
                            {/* MariaDB - Running */}
                            <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <img alt="mariadb" className="w-8 h-8" src="https://cdn.simpleicons.org/mariadb" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">MariaDB Database</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    MariaDB database server for local development
                                  </p>
                                </div>
                              </div>
                              <Badge className="text-xs bg-primary text-primary-foreground">
                                <CircleCheckBig className="inline-block h-4 w-4 text-green-500 mr-1 align-middle" />
                                running
                              </Badge>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>

                            {/* Memcached - Stopped */}
                            <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 254 254" className="w-8 h-8 text-black dark:text-white">
                                    <defs>
                                      <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="a">
                                        <stop stopColor="#574C4A" offset="0%"></stop>
                                        <stop stopColor="#80716D" offset="100%"></stop>
                                      </linearGradient>
                                      <linearGradient x1="88.778%" y1="98.342%" x2="30.149%" y2="-8.68%" id="b">
                                        <stop stopColor="#268D83" offset="0%"></stop>
                                        <stop stopColor="#2EA19E" offset="100%"></stop>
                                      </linearGradient>
                                    </defs>
                                    <path d="M0 171.19V82.17C0 10.271 10.26 0 82.086 0h89.189C243.1 0 253.36 10.271 253.36 82.171v89.019c0 71.9-10.26 82.17-82.086 82.17H82.086C10.261 253.36 0 243.09 0 171.19z" fill="url(#a)"></path>
                                    <g>
                                      <path d="M8.891.655C-3.562 79.583 2.953 153.48 2.953 153.48h38.928c-3.704-19.704-16.992-109.724-5.938-110.021 5.924.94 32.99 76.371 32.99 76.371s5.96-.742 11.958-.742 11.959.742 11.959.742 27.066-75.43 32.99-76.371c11.053.297-2.235 90.317-5.938 110.02h38.927s6.516-73.896-5.938-152.824H116.85C109.99.736 83.89 46.51 80.891 46.51 77.892 46.51 51.792.736 44.932.655H8.892z" fill="url(#b)" transform="translate(45.79 47.098)"></path>
                                    </g>
                                  </svg>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">Memcached</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Memcached distributed memory caching system
                                  </p>
                                </div>
                              </div>
                              <Badge className="text-xs bg-secondary text-secondary-foreground">
                                stopped
                              </Badge>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>

                            {/* MySQL - Stopped */}
                            <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <img alt="mysql" className="w-8 h-8" src="https://cdn.simpleicons.org/mysql" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">MySQL Database</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    MySQL database server for local development
                                  </p>
                                </div>
                              </div>
                              <Badge className="text-xs bg-secondary text-secondary-foreground">
                                stopped
                              </Badge>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>

                            {/* RabbitMQ - Not Installed */}
                            <button className="flex items-center gap-4 p-3 border rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2 opacity-70 bg-transparent">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <img alt="rabbitmq" className="w-8 h-8" src="https://cdn.simpleicons.org/rabbitmq" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">RabbitMQ</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    RabbitMQ message broker for queues and messaging
                                  </p>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>

                            {/* MinIO - Not Installed */}
                            <button className="flex items-center gap-4 p-3 border rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2 opacity-70 bg-transparent">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <img alt="minio" className="w-8 h-8" src="https://cdn.simpleicons.org/minio" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">MinIO Storage</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    MinIO S3-compatible object storage
                                  </p>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>

                            {/* Valkey - Not Installed */}
                            <button className="flex items-center gap-4 p-3 border rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2 opacity-70 bg-transparent">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 6 40 52" className="w-8 h-8 text-black dark:text-white">
                                    <g>
                                      <path d="M15.2,50l-9.4-5.9v-25L28.8,6l22.3,13.1v26.3l-22.7,12.8-7.9-4.9v-12l-4.3-2.7v-13.6l12.4-7.1,12.1,7.1v14.2l-9.6,5.4v-5.7c2.9-1.1,4.9-3.9,4.9-7.3s-3.4-7.8-7.6-7.8-7.6,3.5-7.6,7.8,2.1,6.2,4.9,7.3v10.9l2.7,1.7,16.8-9.5v-19.7l-16.6-9.8-17.1,9.8v18.5l3.6,2.3v6.8ZM28.5,28.1c1.9,0,3.4,1.6,3.4,3.6s-1.5,3.6-3.4,3.6-3.4-1.6-3.4-3.6,1.5-3.6,3.4-3.6Z" fill="currentColor"></path>
                                    </g>
                                  </svg>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">Valkey Cache</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Valkey key-value store for caching and sessions
                                  </p>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>

                            {/* Typesense - Not Installed */}
                            <button className="flex items-center gap-4 p-3 border rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2 opacity-70 bg-transparent">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 255" className="w-8 h-8 text-black dark:text-white">
                                    <path fill="#1035BC" d="M75.104 80.303c.551 2.751.826 5.41.826 7.979c0 2.384-.275 4.951-.826 7.702l-34.938-.275v92.437c0 7.703 3.576 11.554 10.729 11.554h20.908c1.284 3.118 1.926 6.236 1.926 9.354c0 3.118-.184 5.044-.55 5.777c-8.437 1.1-17.149 1.65-26.135 1.65c-17.79 0-26.686-7.61-26.686-22.833V95.709l-19.533.275C.275 93.234 0 90.666 0 88.282c0-2.568.275-5.228.825-7.979l19.533.275V51.692c0-4.952.734-8.437 2.2-10.454c1.468-2.201 4.31-3.302 8.53-3.302h7.427l1.65 1.651v41.267l34.94-.551Zm10.477 125.255c.178-4.02 1.275-8.405 3.286-13.156c2.194-4.934 4.661-8.771 7.401-11.512c14.436 7.857 27.134 11.786 38.1 11.786c6.026 0 10.87-1.188 14.524-3.563c3.837-2.376 5.759-5.573 5.759-9.594c0-6.395-4.935-11.511-14.803-15.349l-15.35-5.755c-23.022-8.406-34.534-21.836-34.534-40.292c0-6.578 1.186-12.425 3.564-17.541c2.557-5.3 6.026-9.776 10.415-13.43c4.567-3.838 9.958-6.761 16.173-8.771c6.21-2.01 13.154-3.016 20.829-3.016c3.47 0 7.307.275 11.511.823c4.384.548 8.772 1.37 13.155 2.467c4.388.913 8.588 2.01 12.609 3.289c4.02 1.279 7.49 2.65 10.415 4.111c0 4.568-.914 9.319-2.74 14.253c-1.827 4.934-4.295 8.588-7.402 10.963c-14.436-6.395-26.95-9.593-37.548-9.593c-4.75 0-8.499 1.188-11.239 3.564c-2.74 2.192-4.11 5.116-4.11 8.77c0 5.665 4.567 10.142 13.706 13.43l16.719 6.03c12.057 4.203 21.013 9.96 26.86 17.268c5.848 7.31 8.772 15.806 8.772 25.49c0 12.974-4.845 23.39-14.53 31.246c-9.685 7.675-23.57 11.513-41.659 11.513c-17.726 0-34.356-4.478-49.883-13.431Zm150.807 48.031V.83c2.762-.554 5.894-.83 9.396-.83c3.682 0 7.09.276 10.216.829v252.76c-3.127.552-6.534.83-10.216.83c-3.502 0-6.634-.278-9.396-.83Z"></path>
                                  </svg>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">Typesense Search</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Typesense open source search engine
                                  </p>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>

                            {/* PostgreSQL - Stopped */}
                            <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <img alt="postgresql" className="w-8 h-8" src="https://cdn.simpleicons.org/postgresql" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">PostgreSQL Database</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    PostgreSQL database server for local development
                                  </p>
                                </div>
                              </div>
                              <Badge className="text-xs bg-secondary text-secondary-foreground">
                                stopped
                              </Badge>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>

                            {/* Meilisearch - Not Installed */}
                            <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2 opacity-70 bg-transparent">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <img alt="meilisearch" className="w-8 h-8" src="https://cdn.simpleicons.org/meilisearch" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">Meilisearch</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Meilisearch full-text search engine
                                  </p>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>

                            {/* MongoDB - Not Installed */}
                            <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2 opacity-70 bg-transparent">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <img alt="mongodb" className="w-8 h-8" src="https://cdn.simpleicons.org/mongodb" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">MongoDB Database</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    MongoDB document database for local development
                                  </p>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>

                            {/* Redis - Not Installed */}
                            <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2 opacity-70 bg-transparent">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <img alt="redis" className="w-8 h-8" src="https://cdn.simpleicons.org/redis" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">Redis Cache</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Redis key-value store for caching and sessions
                                  </p>
                                </div>
                              </div>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>

                            {/* Caddy - Running + Required */}
                            <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <img alt="caddy" className="w-8 h-8" src="https://cdn.simpleicons.org/caddy" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">Web Server</span>
                                    <Badge className="text-xs bg-secondary text-secondary-foreground">
                                      Required
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Caddy reverse proxy server for local development
                                  </p>
                                </div>
                              </div>
                              <Badge className="text-xs bg-primary text-primary-foreground">
                                <CircleCheckBig className="inline-block h-4 w-4 text-green-500 mr-1 align-middle" />
                                running
                              </Badge>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>

                            {/* Mailpit - Running */}
                            <button className="flex items-center gap-4 p-3 border bg-muted/30 rounded-md hover:bg-muted/50 cursor-pointer transition-transform duration-200 text-left w-full hover:translate-x-2 focus-visible:translate-x-2">
                              <div className="flex items-center gap-3 flex-1">
                                <div className="p-2 bg-primary/10 rounded-md">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 132.292 121.708" className="w-8 h-8 text-black dark:text-white">
                                    <path d="M12.321 0l53.861 53.918L120.365 0zM5.155 9.025l60.842 59.673 61.211-59.489-.185 36.835L66.921 70.54l15.164 12.616-8.137 5.986-41.609.184c-4.838-.022-25.877-18.34-27.185-41.255z" fill="currentColor" fillOpacity=".941"></path>
                                    <path d="M78.385 72.049l53.907-21.679-8.031 57.318-11.845-9.132c-21.727 23.171-45.255 26.289-67.997 20.837S12.281 98.39 5.155 83.8-.67 53.116 2.843 38.769c1.13 10.511-1.313 16.316 6.38 33.612 6.31 11.399 14.413 20.417 25.89 24.956 13.9 6.195 32.247 3.357 41.701-3.039l14.24-12.156z" fill="#00b786"></path>
                                  </svg>
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold">Mail Testing</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Email testing server for local development
                                  </p>
                                </div>
                              </div>
                              <Badge className="text-xs bg-primary text-primary-foreground">
                                <CircleCheckBig className="inline-block h-4 w-4 text-green-500 mr-1 align-middle" />
                                running
                              </Badge>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

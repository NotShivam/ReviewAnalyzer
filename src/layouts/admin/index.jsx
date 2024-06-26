import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes.js";
// import { apiData } from "variables/sampleData";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

// const UserContext = createContext()
export const Context = createContext("Default Value");

export default function Admin(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [currentRoute, setCurrentRoute] = useState("Main Dashboard");
  
  const [dataApi, setApiData] = useState({});
  const [apiLoading, setApiLoading] = useState(false);
  const [flaskApi, setFlaskApi] = useState(null);
  const [flaskApiLoading, setFlaskApiLoading] = useState(false);
  const [flaskApiR, setFlaskApiR] = useState(null);
  const [flaskApiLoadingR, setFlaskApiLoadingR] = useState(false);
  const [flaskApiGem, setFlaskApiGem] = useState(null);
  const [flaskApiLoadingGem, setFlaskApiLoadingGem] = useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";
  return (
    <Context.Provider value={{
      value: [dataApi, setApiData], 
      value2:[apiLoading, setApiLoading], 
      value4:[flaskApiLoading, setFlaskApiLoading], 
      value3: [flaskApi, setFlaskApi],
      value5:[flaskApiLoadingR, setFlaskApiLoadingR], 
      value6: [flaskApiR, setFlaskApiR],
      gemData:[flaskApiLoadingGem, setFlaskApiLoadingGem], 
      gemLoad: [flaskApiGem, setFlaskApiGem],
      }}>
      
      <div className="flex h-full w-full">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        {/* Navbar & Main Content */}
        <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
          {/* Main Content */}
          <main
            className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
          >
            {/* Routes */}
            <div className="h-full">
              <Navbar
                onOpenSidenav={() => setOpen(true)}
                logoText={"ReviewRadar"}
                brandText={(dataApi.prodName === undefined) ? "Welcome to ReviewRadar" : dataApi.prodName}
                // brandText="temorary "
                secondary={""}
                {...rest}
              />
              <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
                <Routes>
                  {getRoutes(routes)}

                  <Route
                    path="/"
                    element={<Navigate to="/admin/default" replace />}
                  />
                </Routes>
              </div>
              <div className="p-3">
                <Footer />
              </div>
            </div>
          </main>
        </div>
      </div>
     </Context.Provider>
  );
}


import path from "path"
import { Component, Suspense } from "react"
import { BrowserRouter, NavLink, Route, Routes, Navigate } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"
import logo from '../logo.svg'
import { routes } from "./routes"

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="" />
                        <ul>
                            {/* Crear un Navlink dinamico */}
                            {
                                routes.map(({ to, name }) => (
                                    <li key={to}>
                                        <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}> {name}</NavLink>
                                    </li>
                                ))
                            }


                        </ul>
                    </nav>

                    <Routes>

                        {
                            routes.map(({ path,Component }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={<Component/>}
                                />
                            ))
                        }


                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}

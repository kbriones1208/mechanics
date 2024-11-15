import React from "react";
import { Link } from "react-router-dom";


export const Aside = () => {
  return (
    <div className="content">
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="fakeurl" className="brand-link">
        <img
            src={require ("../logo.png")}
            alt="MechanicSoft Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">MechanicSoft</span>
        </a>
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src={require ("../user2-160x160.jpg")}
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="fakeurl" className="d-block">
                  Alexander Pierce
                </a>
              </div>
            </div>

            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>
            <div className="menu">
              <nav className="mt-2">            
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/">
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                          Dashboard
                        </p>
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/tarea">
                          <i className="nav-icon fa fa-clipboard-check" />
                          <p>Tarea</p>
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/clients">
                        <i className="nav-icon fa fa-user-tie" />
                        <p>Cliente Potencial</p>
                      </Link>
                      
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/proveedores">
                        <i className="nav-icon fa fa-dolly" />
                        <p>Proveedores</p>
                      </Link>                    
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/inventario">
                        <i className="nav-icon fa fa-boxes" />
                        <p>
                          Inventario
                          <i className="fas fa-angle-left right" />
                      </p>
                      </Link>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a className="nav-link">
                          <i className="fa fa-circle-o nav-icon" />
                          <p>Crear Producto</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/icons.html" className="nav-link">
                          <i className="fa fa-circle-o nav-icon" />
                          <p>Listar Productos</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/ordenes_trabajo">
                        <i className="nav-icon fa fa-clipboard-list" />
                        <p>Órdenes de Trabajo</p>
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/ventas">
                        <i className="nav-icon fas fa-shopping-cart" />
                        <p>
                          Ventas
                          <i className="fas fa-angle-left right" />
                        </p>
                      </Link>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/UI/general.html" className="nav-link">
                          <i className="fa fa-circle-o nav-icon" />
                          <p>Crear Cotización</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/UI/icons.html" className="nav-link">
                          <i className="fa fa-circle-o nav-icon" />
                          <p>Nueva Venta</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/finanzas">
                        <i className="nav-icon fa fa-chart-line" />
                        <p>Finanzas</p>
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/talleres">
                        <i className="nav-icon fa fa-wrench" />
                        <p>Talleres</p>
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/clientes">
                        <i className="nav-icon fa fa-user-friends" />
                        <p>Clientes</p>
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/vehiculos">
                        <i className="nav-icon fa fa-car" />
                        <p>Vehículos</p>
                      </Link>
                    </a>
                  </li>
                  <li className="nav-header">ADMINISTRACION</li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/informes">
                        <i className="nav-icon fa fa-rectangle-list" />
                        <p>Informes</p>
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link to="/usuarios">
                        <i className="nav-icon fas fa-users-cog" />
                        <p>Usuarios</p>
                      </Link>
                    </a>
                  </li>                
                </ul>
              </nav>
            </div>
            
          </div>
      </aside>
    </div>
  )
}

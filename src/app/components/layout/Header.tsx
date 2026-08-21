/**
 * ============================================
 * ADVANTEDGE — REFINED RESPONSIVE HEADER
 * ============================================
 * - Compact executive navigation
 * - Optimized desktop mega-menu
 * - Responsive mobile drawer
 * - Keyboard / touch friendly
 * - Route-aware active states
 * - Body scroll lock on mobile
 * - Real page scroll progress
 * - Reduced visual overhead
 * ============================================
 */

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  AnimatePresence,
  motion,
  useScroll,
} from "motion/react";

import {
  Menu,
  X,
  ChevronDown,
  Rocket,
  ArrowRight,
  Target,
  Award,
  MonitorSmartphone,
  Megaphone,
  BarChart3,
} from "lucide-react";

import {
  colors,
  gradients,
} from "../../../styles/design-tokens";


/* ============================================
   SERVICES
============================================ */

const serviceCategories = [
  {
    name: "Strategic Marketing",
    path: "/services/strategic-planning",
    icon: <Target className="h-4 w-4" />,
    description: "Comprehensive marketing strategy & planning",
  },
  {
    name: "Brand Development",
    path: "/services/brand-development",
    icon: <Award className="h-4 w-4" />,
    description: "Brand strategy, identity & positioning",
  },
  {
    name: "Digital Marketing",
    path: "/services/digital-marketing",
    icon: <Rocket className="h-4 w-4" />,
    description: "SEO, PPC, social media & growth",
  },
  {
    name: "AI Marketing Solutions",
    path: "/services/ai-marketing-solutions",
    icon: <MonitorSmartphone className="h-4 w-4" />,
    description: "Content creation & distribution",
  },
  {
    name: "PR & Communications",
    path: "/services/pr-communications",
    icon: <Megaphone className="h-4 w-4" />,
    description: "Media relations & thought leadership",
  },
  {
    name: "Analytics & Optimization",
    path: "/services/analytics-optimization",
    icon: <BarChart3 className="h-4 w-4" />,
    description: "Performance tracking & optimization",
  },
];


/* ============================================
   NAVIGATION
============================================ */

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
    hasDropdown: true,
  },
  {
    name: "Industries",
    path: "/industries",
  },
  {
    name: "Case Studies",
    path: "/case-studies",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];


export function Header() {
  const location = useLocation();

  const { scrollYProgress } = useScroll();

  const [scrolled, setScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [
    servicesDropdownOpen,
    setServicesDropdownOpen,
  ] = useState(false);

  const [
    mobileServicesOpen,
    setMobileServicesOpen,
  ] = useState(false);


  /* ============================================
     SCROLL STATE
  ============================================ */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);


  /* ============================================
     ROUTE CHANGE
  ============================================ */

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);


  /* ============================================
     MOBILE DRAWER BEHAVIOR
  ============================================ */

  useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [mobileMenuOpen]);


  /* ============================================
     ACTIVE ROUTE LOGIC
  ============================================ */

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(
        `${path}/`
      )
    );
  };


  return (
    <>
      {/* ============================================
          HEADER
      ============================================ */}

      <motion.header
        initial={{
          y: -70,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0"
        style={{
          zIndex: 99990,
        }}
      >
        <div className="relative">

          {/* ============================================
              SINGLE GLASS BACKGROUND LAYER
          ============================================ */}

          <div
            className={`absolute inset-0 border-b transition-all duration-300 ${
              scrolled
                ? "border-gray-200/80 bg-white/95 shadow-[0_10px_35px_rgba(0,1,49,0.08)] backdrop-blur-xl"
                : "border-white/50 bg-white/75 backdrop-blur-lg"
            }`}
          />


          {/* ============================================
              HEADER CONTENT
          ============================================ */}

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="flex h-16 items-center justify-between gap-4">

              {/* ============================================
                  LOGO
              ============================================ */}

              <Link
                to="/"
                aria-label="AdvantEdge Home"
                className="group relative z-10 flex min-w-0 shrink-0 items-center gap-2.5"
              >
                <motion.div
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="relative"
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl shadow-[0_8px_22px_rgba(0,0,170,0.20)]"
                    style={{
                      background:
                        gradients.primary,
                    }}
                  >
                    <Rocket className="h-4 w-4 text-white" />
                  </div>
                </motion.div>


                <div className="min-w-0">

                  <span
                    className="block text-[16px] font-bold leading-none tracking-[-0.02em]"
                    style={{
                      color:
                        colors.brand.primary,
                    }}
                  >
                    AdvantEdge
                  </span>

                  <span
                    className="mt-1 hidden text-[9px] font-semibold uppercase leading-none tracking-[0.12em] sm:block"
                    style={{
                      color:
                        colors.brand.secondary,
                    }}
                  >
                    Strategic Marketing
                  </span>

                </div>
              </Link>


              {/* ============================================
                  DESKTOP NAVIGATION
              ============================================ */}

              <nav
                aria-label="Primary navigation"
                className="hidden items-center lg:flex"
              >
                <div className="flex items-center gap-0.5 rounded-xl border border-gray-200/50 bg-white/35 p-1">

                  {navLinks.map((link) => {

                    const active =
                      isActive(link.path);

                    if (
                      link.hasDropdown
                    ) {
                      return (
                        <div
                          key={link.path}
                          className="relative"
                          onMouseEnter={() =>
                            setServicesDropdownOpen(
                              true
                            )
                          }
                          onMouseLeave={() =>
                            setServicesDropdownOpen(
                              false
                            )
                          }
                          onFocusCapture={() =>
                            setServicesDropdownOpen(
                              true
                            )
                          }
                          onBlurCapture={(
                            event
                          ) => {
                            const next =
                              event.relatedTarget as Node | null;

                            if (
                              !next ||
                              !event.currentTarget.contains(
                                next
                              )
                            ) {
                              setServicesDropdownOpen(
                                false
                              );
                            }
                          }}
                        >
                          {/* SERVICES NAV ITEM */}

                          <Link
                            to={link.path}
                            aria-current={
                              active
                                ? "page"
                                : undefined
                            }
                            aria-haspopup="menu"
                            aria-expanded={
                              servicesDropdownOpen
                            }
                            className="group relative flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-semibold transition-colors duration-200"
                            style={{
                              color: active
                                ? colors
                                    .brand
                                    .primary
                                : colors
                                    .text
                                    .secondary,
                            }}
                          >
                            {active && (
                              <motion.span
                                layoutId="header-active-nav"
                                className="absolute inset-0 rounded-lg"
                                style={{
                                  backgroundColor:
                                    "rgba(0,0,170,0.075)",
                                }}
                                transition={{
                                  type: "spring",
                                  bounce: 0.12,
                                  duration: 0.5,
                                }}
                              />
                            )}

                            <span className="absolute inset-0 rounded-lg bg-[#0000aa]/[0.04] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                            <span className="relative z-10">
                              {link.name}
                            </span>

                            <ChevronDown
                              className={`relative z-10 h-3.5 w-3.5 transition-transform duration-200 ${
                                servicesDropdownOpen
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </Link>


                          {/* ============================================
                              DESKTOP SERVICES MEGA MENU
                          ============================================ */}

                          <AnimatePresence>
                            {servicesDropdownOpen && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  y: 8,
                                  scale: 0.985,
                                }}
                                animate={{
                                  opacity: 1,
                                  y: 0,
                                  scale: 1,
                                }}
                                exit={{
                                  opacity: 0,
                                  y: 6,
                                  scale: 0.99,
                                }}
                                transition={{
                                  duration: 0.16,
                                  ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1,
                                  ],
                                }}
                                className="absolute left-1/2 top-full w-[570px] -translate-x-1/2 pt-3"
                              >
                                <div
                                  role="menu"
                                  className="overflow-hidden rounded-[20px] border border-gray-200/80 bg-white/95 shadow-[0_24px_70px_rgba(0,1,49,0.16)] backdrop-blur-xl"
                                >

                                  {/* MENU HEADER */}

                                  <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">

                                    <div>
                                      <p
                                        className="text-[9px] font-bold uppercase tracking-[0.16em]"
                                        style={{
                                          color:
                                            colors
                                              .brand
                                              .secondary,
                                        }}
                                      >
                                        Services
                                      </p>

                                      <p
                                        className="mt-0.5 text-[12px] font-semibold"
                                        style={{
                                          color:
                                            colors
                                              .brand
                                              .primary,
                                        }}
                                      >
                                        Explore our core capabilities
                                      </p>
                                    </div>

                                    <Link
                                      to="/services"
                                      className="group flex items-center gap-1.5 text-[11px] font-bold"
                                      style={{
                                        color:
                                          colors
                                            .brand
                                            .secondary,
                                      }}
                                    >
                                      View All

                                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                                    </Link>

                                  </div>


                                  {/* SERVICES */}

                                  <div className="grid grid-cols-2 gap-1 p-2">

                                    {serviceCategories.map(
                                      (
                                        service
                                      ) => (
                                        <Link
                                          key={
                                            service.path
                                          }
                                          to={
                                            service.path
                                          }
                                          role="menuitem"
                                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-[#0000aa]/[0.035]"
                                        >
                                          <div
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105"
                                            style={{
                                              color:
                                                colors
                                                  .brand
                                                  .secondary,

                                              backgroundColor:
                                                "rgba(0,0,170,0.075)",
                                            }}
                                          >
                                            {
                                              service.icon
                                            }
                                          </div>

                                          <div className="min-w-0">

                                            <p
                                              className="text-[12px] font-bold leading-tight"
                                              style={{
                                                color:
                                                  colors
                                                    .brand
                                                    .primary,
                                              }}
                                            >
                                              {
                                                service.name
                                              }
                                            </p>

                                            <p className="mt-1 text-[10px] leading-[1.45] text-gray-500">
                                              {
                                                service.description
                                              }
                                            </p>

                                          </div>
                                        </Link>
                                      )
                                    )}

                                  </div>

                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }


                    /* ============================================
                       STANDARD DESKTOP LINK
                    ============================================ */

                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        aria-current={
                          active
                            ? "page"
                            : undefined
                        }
                        className="group relative rounded-lg px-3 py-2 text-[13px] font-semibold transition-colors duration-200"
                        style={{
                          color: active
                            ? colors
                                .brand
                                .primary
                            : colors
                                .text
                                .secondary,
                        }}
                      >
                        {active && (
                          <motion.span
                            layoutId="header-active-nav"
                            className="absolute inset-0 rounded-lg"
                            style={{
                              backgroundColor:
                                "rgba(0,0,170,0.075)",
                            }}
                            transition={{
                              type: "spring",
                              bounce: 0.12,
                              duration: 0.5,
                            }}
                          />
                        )}

                        <span className="absolute inset-0 rounded-lg bg-[#0000aa]/[0.04] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

                        <span className="relative z-10">
                          {link.name}
                        </span>

                      </Link>
                    );
                  })}

                </div>
              </nav>


              {/* ============================================
                  DESKTOP CTA
              ============================================ */}

              <div className="hidden shrink-0 items-center lg:flex">

                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-4 py-2.5 text-[12px] font-bold text-white shadow-[0_10px_28px_rgba(0,0,170,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(0,0,170,0.30)]"
                  style={{
                    background:
                      gradients.primary,
                  }}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    Get Started

                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>

              </div>


              {/* ============================================
                  MOBILE MENU BUTTON
              ============================================ */}

              <button
                type="button"
                aria-label={
                  mobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={
                  mobileMenuOpen
                }
                aria-controls="mobile-navigation"
                onClick={() =>
                  setMobileMenuOpen(
                    (open) => !open
                  )
                }
                className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200/80 bg-white/70 transition-all duration-200 hover:bg-white active:scale-95 lg:hidden"
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{
                        opacity: 0,
                        rotate: -45,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        rotate: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotate: 45,
                        scale: 0.8,
                      }}
                      transition={{
                        duration: 0.16,
                      }}
                    >
                      <X
                        className="h-5 w-5"
                        style={{
                          color:
                            colors
                              .brand
                              .primary,
                        }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      transition={{
                        duration: 0.16,
                      }}
                    >
                      <Menu
                        className="h-5 w-5"
                        style={{
                          color:
                            colors
                              .brand
                              .primary,
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

            </div>
          </div>


          {/* ============================================
              REAL SCROLL PROGRESS
          ============================================ */}

          <motion.div
            className="absolute inset-x-0 bottom-0 h-[2px] origin-left"
            style={{
              background:
                gradients.primary,
              scaleX:
                scrollYProgress,
            }}
          />

        </div>
      </motion.header>


      {/* ============================================
          MOBILE NAVIGATION
      ============================================ */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* BACKDROP */}

            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="fixed inset-0 bg-[#000131]/25 backdrop-blur-[3px] lg:hidden"
              style={{
                zIndex: 99991,
              }}
            />


            {/* ============================================
                MOBILE DRAWER
            ============================================ */}

            <motion.aside
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                damping: 32,
                stiffness: 340,
                mass: 0.85,
              }}
              className="fixed inset-y-0 right-0 flex w-full max-w-[390px] flex-col overflow-hidden border-l border-gray-200/80 bg-white shadow-[-20px_0_60px_rgba(0,1,49,0.16)] lg:hidden"
              style={{
                zIndex: 99992,
              }}
            >

              {/* ============================================
                  MOBILE DRAWER HEADER
              ============================================ */}

              <div
                className="shrink-0 border-b border-gray-200/80 px-4 pb-4 pt-4"
                style={{
                  paddingTop:
                    "max(16px, env(safe-area-inset-top))",
                }}
              >
                <div className="flex items-center justify-between">

                  <Link
                    to="/"
                    className="flex items-center gap-2.5"
                    onClick={() =>
                      setMobileMenuOpen(
                        false
                      )
                    }
                  >
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl shadow-lg"
                      style={{
                        background:
                          gradients.primary,
                      }}
                    >
                      <Rocket className="h-4 w-4 text-white" />
                    </div>

                    <div>
                      <p
                        className="text-[16px] font-bold leading-none"
                        style={{
                          color:
                            colors
                              .brand
                              .primary,
                        }}
                      >
                        AdvantEdge
                      </p>

                      <p
                        className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em]"
                        style={{
                          color:
                            colors
                              .brand
                              .secondary,
                        }}
                      >
                        Strategic Marketing
                      </p>
                    </div>
                  </Link>


                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() =>
                      setMobileMenuOpen(
                        false
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 transition-colors hover:bg-gray-100"
                  >
                    <X
                      className="h-4.5 w-4.5"
                      style={{
                        color:
                          colors
                            .brand
                            .primary,
                      }}
                    />
                  </button>

                </div>
              </div>


              {/* ============================================
                  MOBILE SCROLL AREA
              ============================================ */}

              <div className="flex-1 overflow-y-auto overscroll-contain">

                <nav
                  aria-label="Mobile navigation"
                  className="p-4"
                >
                  <div className="space-y-1">

                    {navLinks.map(
                      (
                        link,
                        index
                      ) => {

                        const active =
                          isActive(
                            link.path
                          );


                        /* ============================================
                           MOBILE SERVICES
                        ============================================ */

                        if (
                          link.hasDropdown
                        ) {
                          return (
                            <motion.div
                              key={
                                link.path
                              }
                              initial={{
                                opacity: 0,
                                y: 8,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                delay:
                                  index *
                                  0.035,
                              }}
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  setMobileServicesOpen(
                                    (
                                      open
                                    ) =>
                                      !open
                                  )
                                }
                                aria-expanded={
                                  mobileServicesOpen
                                }
                                aria-controls="mobile-services"
                                className="flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left transition-colors duration-200"
                                style={{
                                  backgroundColor:
                                    active
                                      ? "rgba(0,0,170,0.065)"
                                      : "transparent",

                                  color:
                                    active
                                      ? colors
                                          .brand
                                          .primary
                                      : colors
                                          .text
                                          .secondary,
                                }}
                              >
                                <span className="text-[14px] font-semibold">
                                  {
                                    link.name
                                  }
                                </span>

                                <ChevronDown
                                  className={`h-4 w-4 transition-transform duration-200 ${
                                    mobileServicesOpen
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>


                              <AnimatePresence
                                initial={
                                  false
                                }
                              >
                                {mobileServicesOpen && (
                                  <motion.div
                                    id="mobile-services"
                                    initial={{
                                      height: 0,
                                      opacity: 0,
                                    }}
                                    animate={{
                                      height:
                                        "auto",
                                      opacity: 1,
                                    }}
                                    exit={{
                                      height: 0,
                                      opacity: 0,
                                    }}
                                    transition={{
                                      duration: 0.22,
                                      ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1,
                                      ],
                                    }}
                                    className="overflow-hidden"
                                  >
                                    <div className="ml-2 mt-1 space-y-0.5 border-l border-gray-200 pl-2">

                                      <Link
                                        to="/services"
                                        className="flex items-center justify-between rounded-lg px-3 py-2.5 text-[12px] font-bold"
                                        style={{
                                          color:
                                            colors
                                              .brand
                                              .secondary,
                                        }}
                                      >
                                        View All Services

                                        <ArrowRight className="h-3.5 w-3.5" />
                                      </Link>


                                      {serviceCategories.map(
                                        (
                                          service
                                        ) => (
                                          <Link
                                            key={
                                              service.path
                                            }
                                            to={
                                              service.path
                                            }
                                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-gray-50"
                                          >
                                            <div
                                              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                                              style={{
                                                color:
                                                  colors
                                                    .brand
                                                    .secondary,

                                                backgroundColor:
                                                  "rgba(0,0,170,0.07)",
                                              }}
                                            >
                                              {
                                                service.icon
                                              }
                                            </div>

                                            <span
                                              className="text-[12px] font-semibold leading-tight"
                                              style={{
                                                color:
                                                  colors
                                                    .brand
                                                    .primary,
                                              }}
                                            >
                                              {
                                                service.name
                                              }
                                            </span>

                                          </Link>
                                        )
                                      )}

                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          );
                        }


                        /* ============================================
                           STANDARD MOBILE LINK
                        ============================================ */

                        return (
                          <motion.div
                            key={
                              link.path
                            }
                            initial={{
                              opacity: 0,
                              y: 8,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              delay:
                                index *
                                0.035,
                            }}
                          >
                            <Link
                              to={
                                link.path
                              }
                              aria-current={
                                active
                                  ? "page"
                                  : undefined
                              }
                              className="flex items-center justify-between rounded-xl px-3.5 py-3 transition-colors duration-200"
                              style={{
                                backgroundColor:
                                  active
                                    ? "rgba(0,0,170,0.065)"
                                    : "transparent",

                                color:
                                  active
                                    ? colors
                                        .brand
                                        .primary
                                    : colors
                                        .text
                                        .secondary,
                              }}
                            >
                              <span className="text-[14px] font-semibold">
                                {
                                  link.name
                                }
                              </span>

                              {active && (
                                <span
                                  className="h-1.5 w-1.5 rounded-full"
                                  style={{
                                    backgroundColor:
                                      colors
                                        .brand
                                        .accent,
                                  }}
                                />
                              )}

                            </Link>
                          </motion.div>
                        );
                      }
                    )}

                  </div>
                </nav>

              </div>


              {/* ============================================
                  MOBILE CTA
              ============================================ */}

              <div
                className="shrink-0 border-t border-gray-200/80 bg-white p-4"
                style={{
                  paddingBottom:
                    "max(16px, env(safe-area-inset-bottom))",
                }}
              >
                <Link
                  to="/contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-[13px] font-bold text-white shadow-[0_12px_30px_rgba(0,0,170,0.24)]"
                  style={{
                    background:
                      gradients.primary,
                  }}
                >
                  Get Started

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

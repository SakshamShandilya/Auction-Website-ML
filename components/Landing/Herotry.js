'use client'
import '../../apps.css';
import { IoChevronForwardCircle, IoMailOutline, IoChevronForward, IoApps, IoNotifications, IoPieChart, IoNewspaper, IoCard, IoColorFill, IoAddCircle } from 'react-icons/io5';
import { IconContext } from "react-icons";
import { motion } from 'framer-motion';
import Img1 from '../../src/assets/bg1.png'
import Image from 'next/image'
import Link from 'next/link';

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
}

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6, ease: easeing
    }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing
    }
  }
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1
    }
  }
}

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1
    }
  }
}

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition }
  }
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing
    }
  }
};
const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing
    }
  }
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing }
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing
    }
  }
};

let easing = [0.6, -0.05, 0.01, 0.99];

const container = {
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: .2
    }
  }
}

const title = {
  hidden: {
    y: 60,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: .2,
      duration: 0.6,
      ease: easing
    }
  }
};

const hoverEffect = {
  whileHover: {
    scale: 1.5, rotate: 630, borderRadius: "100%"
  },
  whileTap: {
    scale: .8, rotate: 630, borderRadius: "100%"
  },
}


function HeroTry() {
  return (
    <motion.div initial='initial' animate='animate'>
      {/* <motion.header variants={stagger}>
          <motion.div className="logo_wrapper" variants={header}>dev<span>amit</span></motion.div>
          <motion.div className="menu_container" variants={stagger}>
            <motion.span variants={header}>
              <IconContext.Provider value={{color:"#000", size:"18px", className:"icons_container"}}>
                <div className="icon"><FaBehance/></div>
                <div className="icon"><FaDribbble/></div>
              </IconContext.Provider>
            </motion.span>
            <motion.span variants={header}>
              <IconContext.Provider value={{color:"#000", size:"18px"}}>
                <div className="icon"><IoMailOutline/></div>
                hello@example.co
              </IconContext.Provider>
            </motion.span>
            <motion.span className="menu" variants={header}>
              <span></span>
              <span></span>
              <span></span>
            </motion.span>
          </motion.div>
      </motion.header> */}

      <motion.div className="content_wrapper" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, ease: easeing }}>
        <div className="left_content_wrapper">

          <motion.h2>

            <motion.span variants={firstName} initial="initial" animate="animate" className='first'>
              <motion.span variants={letter} className='text-black dark:text-white'>F</motion.span>
              <motion.span variants={letter} className='text-black dark:text-white'>i</motion.span>
              <motion.span variants={letter} className='text-black dark:text-white'>n</motion.span>
              <motion.span variants={letter} className='text-black dark:text-white'>d</motion.span>
              <motion.span variants={letter} className="second text-black dark:text-white">t</motion.span>
              <motion.span variants={letter} className='text-black dark:text-white'>h</motion.span>
              <motion.span variants={letter} className='text-black dark:text-white'>e</motion.span>
              <motion.span variants={letter} className="second text-purple-600">r</motion.span>
              <motion.span variants={letter} className='text-purple-600'>i</motion.span>
              <motion.span variants={letter} className='text-purple-600'>g</motion.span>
              <motion.span variants={letter} className='text-purple-600'>h</motion.span>
              <motion.span variants={letter} className='text-purple-600'>t</motion.span>
              <motion.span variants={letter} className="second text-purple-600">i</motion.span>
              <motion.span variants={letter} className='text-purple-600'>t</motion.span>
              <motion.span variants={letter} className='text-purple-600'>e</motion.span>
              <motion.span variants={letter} className='text-purple-600'>m</motion.span>
            </motion.span>
            <motion.span variants={lastName} initial="initial" animate="animate" className='last'>
              <motion.span variants={letter} className='text-black dark:text-white'>f</motion.span>
              <motion.span variants={letter} className='text-black dark:text-white'>o</motion.span>
              <motion.span variants={letter} className='text-black dark:text-white'>r</motion.span>
              <motion.span variants={letter} className="second text-black dark:text-white">t</motion.span>
              <motion.span variants={letter} className='text-black dark:text-white'>h</motion.span>
              <motion.span variants={letter} className='text-black dark:text-white'>e</motion.span>
              <motion.span variants={letter} className="second text-purple-600">r</motion.span>
              <motion.span variants={letter} className='text-purple-600'>i</motion.span>
              <motion.span variants={letter} className='text-purple-600'>g</motion.span>
              <motion.span variants={letter} className='text-purple-600'>h</motion.span>
              <motion.span variants={letter} className='text-purple-600'>t</motion.span>
              <motion.span variants={letter} className="second text-purple-600">p</motion.span>
              <motion.span variants={letter} className='text-purple-600'>r</motion.span>
              <motion.span variants={letter} className='text-purple-600'>i</motion.span>
              <motion.span variants={letter} className='text-purple-600'>c</motion.span>
              <motion.span variants={letter} className='text-purple-600'>e!</motion.span>
            </motion.span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-gray-700 dark:text-white">Our auctions offer competitive prices, allowing you to find the perfect item for the right price. Whether you're looking for the latest gadgets or just a great bargain, you'll find it here!</motion.p>

          <Link href='/create'>
            <motion.div className="btn_group" variants={stagger}>
              <motion.div className="btn btn_primary" variants={btnGroup} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Create an Auction
                <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                  <IoChevronForwardCircle />
                </IconContext.Provider>
              </motion.div>
              {/* <motion.div className="btn btn_secondary" variants={btnGroup} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>See Auctions</motion.div> */}
            </motion.div>
          </Link>


          {/* <motion.div className="review_container" variants={stagger}>
            <motion.p className="total_review" variants={star}>64+ Reviews</motion.p>
            <IconContext.Provider value={{color:"#fff", size:"18px"}}>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
                <motion.span variants={star} whileHover={{scale:1.2, rotate:180,borderRadius:'100%',cursor:'pointer'}}><IoStar/></motion.span>
            </IconContext.Provider> 
            <motion.p className="more_review" variants={star}>More then 50+ people taking services.</motion.p>
          </motion.div> */}
        </div>

        <motion.div className="right_content_wrapper">
          <motion.img src={Img1.src} alt="bg" initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: 0.8 }} />
        </motion.div>
      </motion.div>

      <motion.div className="service_container">
        <div className="title_wrapper">
          <motion.span className="service_title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5, delay: 1.8 }}
          >Our Services</motion.span>
          <motion.h2
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5, delay: 1 }}
            className="dark:text-white"
          >Auction your products<br />For the Best Price.</motion.h2>
        </div>


        <motion.div className="service_card" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{ once: false }}>

          <motion.div className="dark:bg-slate-900 card " variants={item}>
            <motion.span className="service_icon" style={{ backgroundColor: "#ddfbf9" }} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
              <IconContext.Provider value={{ color: "#14da8f", size: "22px" }}>
                <IoMailOutline />
              </IconContext.Provider>
            </motion.span>
            <h3 className="dark:text-white">Create Auctions<br />with various<br />customized options</h3>
          </motion.div>

          <motion.div className="card dark:bg-slate-900" variants={item}>
            <motion.span className="service_icon" style={{ backgroundColor: "#e7daf8" }} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
              <IconContext.Provider value={{ color: "#5700cf", size: "22px" }}>
                <IoApps />
              </IconContext.Provider>
            </motion.span>
            <h3 className='dark:text-white'>Browse Through <br />various types of <br />product categories</h3>
          </motion.div>
          <motion.div className="card dark:bg-slate-900" variants={item}>
            <motion.span className="service_icon" style={{ backgroundColor: "#ffede6" }} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
              <IconContext.Provider value={{ color: "#ff8559", size: "22px" }}>
                <IoColorFill />
              </IconContext.Provider>
            </motion.span>
            <h3 className='dark:text-white'>Each Auction having <br />related details <br />is presented</h3>
          </motion.div>
          <motion.div className="card dark:bg-slate-900" variants={item}>
            <motion.span className="service_icon" style={{ backgroundColor: "#ffe1e9" }} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
              <IconContext.Provider value={{ color: "#fa3970", size: "22px" }}>
                <IoNotifications />
              </IconContext.Provider>
            </motion.span>
            <h3 className='dark:text-white'>Biding alerts<br />through Whatsapp<br />for the users</h3>
          </motion.div>
          <motion.div className="card dark:bg-slate-900" variants={item}>
            <motion.span className="service_icon" style={{ backgroundColor: "#dcedff" }} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
              <IconContext.Provider value={{ color: "#56a8f4", size: "22px" }}>
                <IoNewspaper />
              </IconContext.Provider>
            </motion.span>
            <h3 className='dark:text-white'>History of Purchases <br />& Auctions overview<br />are presented</h3>
          </motion.div>
          <motion.div className="card dark:bg-slate-900" variants={item}>
            <motion.span className="service_icon" style={{ backgroundColor: "#dbf9ed" }} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
              <IconContext.Provider value={{ color: "#06d786", size: "22px" }}>
                <IoPieChart />
              </IconContext.Provider>
            </motion.span>
            <h3 className='dark:text-white'>A User Specific<br />Dashboard for all<br />their needs</h3>
          </motion.div>
          <motion.div className="card dark:bg-slate-900" variants={item}>
            <motion.span className="service_icon" style={{ backgroundColor: "#fffada" }} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
              <IconContext.Provider value={{ color: "#f1df11", size: "22px" }}>
                <IoCard />
              </IconContext.Provider>
            </motion.span>
            <h3 className='dark:text-white'>Automated Invoice Generated for<br /> each purchase</h3>
          </motion.div>
          <motion.div className="card dark:bg-slate-900" variants={item}>
            <motion.span className="service_icon" style={{ backgroundColor: "#ffdaff" }} variants={hoverEffect} whileHover="whileHover" whileTap='whileTap'>
              <IconContext.Provider value={{ color: "#ee11f1", size: "22px" }}>
                <IoAddCircle />
              </IconContext.Provider>
            </motion.span>
            <h3 className='dark:text-white'>AutoBidding feature<br />enabled for users<br />as per their needs</h3>
          </motion.div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
}

export default HeroTry;
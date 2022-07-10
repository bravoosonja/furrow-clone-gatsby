# Overview

The aim of the project is to clone Furrow website.

## Features

- Canvas
- Light/dark mode (Context API to manage global state)
- Custom cursor
- Customer hamburger menu
- Accordion

## Demo

# Skills used

- React
- Styled Components
- Gatsby.js
- Framer motion
- Canvas
- Reducers to manage states of custom cursor and themes
- Built in custom hooks
- Scroll animations

# Lessons Learned

1. Videos in `navigation.js` did not autoPlay initially.

```JavaScript
<motion.video
    controls
    key={revealVideo.key}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
        duration: 0.2,
        ease: "easeInOut",
    }}
    loop
    muted
    autoPlay="autoPlay"
    >
    <source
        src={require(`../assets/video/${revealVideo.video}`)}
        type="video/mp4"
    ></source>
</motion.video>
```

Resolved by importing each video source.

```JavaScript
import FeaturedVideo from "../assets/video/featured-video.mp4";
const navRoutes = [
  {
    id: 0,
    title: "not humble",
    path: "/not-humble",
    video: FeaturedVideo,
  }, ... ]
```

```JavaScript
<motion.video
    controls
    loop
    autoPlay
    preload="auto"
    key={revealVideo.key}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    animate={{
      opacity: 1,
    }}
    transition={{ duration: 0.2, ease: "easeInOut" }}
  >
    <source src={`${revealVideo.video}`} type="video/mp4" />
  </motion.video>
```

# Acknowledgement

- [Furrow original website](https://furrow.studio/)
- This project was created following [this tutorial](https://www.youtube.com/watch?v=YQB5JgaJosQ&list=PLgcPxVODYXGJS6iqdZe1LUUW9iXS7ZGrf)

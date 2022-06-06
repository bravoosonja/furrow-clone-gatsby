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
- Context API to manage global state to toggle light/dark mode
- Built in custom hooks
- Scroll animations

# Current issues
1. Videos in `navigation.js` do not autoPlay. 
```
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
2. The same codes for global state context for custom cursor are used twice. Duplicated in `index.js` 
```
 const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };
```

# Acknowledgement
- [Furrow original website](https://furrow.studio/)
- This project was created following [this tutorial](https://www.youtube.com/watch?v=YQB5JgaJosQ&list=PLgcPxVODYXGJS6iqdZe1LUUW9iXS7ZGrf)
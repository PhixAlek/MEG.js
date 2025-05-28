# 🚀 MEG - My Easy Engine

**A lightweight JavaScript library for creating games with Canvas.**  
_Simple, fast, and modular. Ideal for 2D HTML5 games._

---

## 🎮 What is MEG?
MEG (**My Easy Engine**) is a **lightweight** and **modular** JavaScript library designed to simplify game development using **Canvas**, without heavy dependencies.

🔹 **Current Goal:** Serve as a base framework for my own game, later evolving into a fully modular and optimized game engine.  
🔹 **Future Plans:** Improve the structure, make it easier to use, and enhance its architecture for scalability.

---

## 📌 Features
✔ **Canvas API-based rendering**  
✔ **GameObject system** (sprites, entities, collisions)  
✔ **Input handling** (keyboard/mouse)  
✔ **Optimized game loop**  
⬜ **Basic physics and collision detection (planned)**  
⬜ **Animation system (planned)**  
⬜ **Scene management (planned)**  
⬜ **Visual editor (potential future addition)**  

---

## 📦 Project Structure *(Provisional)*
_(The final structure will be improved as the project evolves.)_

```plaintext
📂 meg-engine/
 ├── 📂 src/ (Source Code)
 │   ├── engine.js      # Core engine logic
 │   ├── renderer.js    # Rendering system
 │   ├── gameObject.js  # Base class for game objects
 │   ├── input.js       # Input handling (keyboard/mouse)
 │   ├── physics.js     # Collision and physics (planned)
 │   ├── scene.js       # Scene management (planned)
 │   ├── audio.js       # Audio system (planned)
 ├── 📂 demos/ (Usage examples)
 ├── index.html (Basic demo)
 ├── LICENSE (MIT License)
 ├── README.md (This file)
 ├── .gitignore (Ignoring unnecessary files)
 └── package.json (For NPM publishing - future)
```

---

## 🚀 Installation (When Available on NPM)
_Once the library is ready for public use, it can be installed via NPM._

```bash
npm install meg-engine
```

For now, you can **clone this repository** and include it manually in your projects.

---

## 🎩 Basic Usage
```js
import { Engine, GameObject } from "meg-engine";

const game = new Engine("gameCanvas");
const player = new GameObject(50, 50, 50, 50, "blue");

game.addGameObject(player);
game.start();
```

---

## 🔥 Roadmap
### **Phase 1: Core Library (Current Development)**
✅ Setup the base structure  
✅ Implement Canvas rendering  
✅ Create a GameObject system  
⬜ Implement input handling (keyboard/mouse)  
⬜ Develop a game loop with deltaTime  
⬜ Add scene management  

### **Phase 2: Expanding Functionality**
⬜ Implement basic physics and collision detection  
⬜ Add animation support (sprite sheets, frame animations)  
⬜ Include a basic audio system  

### **Phase 3: Possible Future Evolution**
⬜ Develop an optional **visual editor** (drag & drop)  
⬜ Create a built-in level editor  
⬜ Expand documentation and tutorials  

---

## 🛠️ Contribution & Development
For now, **this is a private project**, but in the future, it may be opened for collaboration. The structure and organization will evolve over time.

💼 **If you have suggestions or ideas, feel free to discuss them!**  

---

## 📝 License
MEG is **open-source** under the **MIT License**.  
You are free to use, modify, and distribute it.  

---

### 🌟 **This is just the beginning!**
🚀 The engine is currently in **active development**, with improvements planned as the project progresses. Stay tuned for updates!

import { SpriteAnimator } from "../engine/animation/sprites/SpriteAnimator.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Crear un animador de prueba
const playerAnimator = new SpriteAnimator("/assets/json/player.json", "/assets/sprites/player.png");

// Cambiar a animación de caminar después de 3 segundos
setTimeout(() => {
    playerAnimator.setAnimation("walk");
}, 3000);

// Bucle del juego
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    playerAnimator.draw(ctx, 100, 200);
    requestAnimationFrame(gameLoop);
}

gameLoop();

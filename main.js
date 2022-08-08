window.onload = () => {
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    // fill rectangle
    context.fillRect(0, 0, width, height);
}
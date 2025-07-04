
const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        class Estrella {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedY = Math.random() * 2 + 1;
            }

            actualizar() {
                this.y += this.speedY;
                if (this.y > canvas.height) {
                    this.y = 0;
                    this.x = Math.random() * canvas.width;
                }
            }

            dibujar() {
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const estrellas = [];
        for (let i = 0; i < 100; i++) {
            estrellas.push(new Estrella());
        }


        function animar() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            estrellas.forEach(estrella => {
                estrella.actualizar();
                estrella.dibujar();
            });
            requestAnimationFrame(animar);
        }


        animar();


        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

  
document.addEventListener("DOMContentLoaded", function() {
        // Aquí va tu código JavaScript para adjuntar eventos
        
        // Obtén una referencia al botón y al modal
            const verMasBtn = document.getElementById("verMasBtn");
            const modal = document.getElementById("modal");
            const closeModal = document.getElementById("closeModal");
            const habilidadesList = document.getElementById("habilidades");

            // Agrega un evento clic al botón "Ver más" para mostrar el modal
            verMasBtn.addEventListener("click", () => {
            // Muestra el modal
            modal.style.display = "block";

            // Obtén las habilidades de la lista en el HTML
            const habilidadesItems = habilidadesList.querySelectorAll("li");

            // Recorre los elementos de la lista y agrega sus textos al modal
            habilidadesItems.forEach(item => {
                const habilidad = item.textContent;
                const li = document.createElement("li");
                li.textContent = habilidad;
                habilidadesList.appendChild(li);
            });
            });

            // Agrega un evento clic para cerrar el modal al hacer clic en la "X"
            closeModal.addEventListener("click", () => {
            modal.style.display = "none";
            });



            document.getElementById("verMasBtnJava").addEventListener("click", function () {
                var modal = document.getElementById("modalJava");
                modal.style.display = "block";
            });
            
            // Función para cerrar el modal de Java
            document.getElementById("closeModalJava").addEventListener("click", function () {
                var modal = document.getElementById("modalJava");
                modal.style.display = "none";
            });


                    // Función para mostrar el modal de PostgreSQL
            document.getElementById("verMasBtnPostgreSQL").addEventListener("click", function () {
                var modal = document.getElementById("modalPostgreSQL");
                modal.style.display = "block";
            });

            // Función para cerrar el modal de PostgreSQL
            document.getElementById("closeModalPostgreSQL").addEventListener("click", function () {
                var modal = document.getElementById("modalPostgreSQL");
                modal.style.display = "none";
            });



            // Función para mostrar el modal de MySQL
            document.getElementById("verMasBtnMySQL").addEventListener("click", function () {
                var modal = document.getElementById("modalMySQL");
                modal.style.display = "block";
            });

            // Función para cerrar el modal de MySQL
            document.getElementById("closeModalMySQL").addEventListener("click", function () {
                var modal = document.getElementById("modalMySQL");
                modal.style.display = "none";
            });


            

            // Función para mostrar el modal de Python
            document.getElementById("verMasBtnPython").addEventListener("click", function () {
                var modal = document.getElementById("modalPython");
                modal.style.display = "block";
            });

            // Función para cerrar el modal de Python
            document.getElementById("closeModalPython").addEventListener("click", function () {
                var modal = document.getElementById("modalPython");
                modal.style.display = "none";



            });

               
            //Función para SpringBoot
            document.getElementById("verMasBtnSpringB").addEventListener("click", function () {
                var modal = document.getElementById("modalSpringB");
                modal.style.display = "block";
            });

            // Función para cerrar el modal de SpringBoot
            document.getElementById("closeModalSpringB").addEventListener("click", function () {
                var modal = document.getElementById("modalSpringB");
                modal.style.display = "none";
            });




            //Función para Github
            document.getElementById("verMasGithub").addEventListener("click", function () {
                var modal = document.getElementById("modalGithub");
                modal.style.display = "block";
            });


            // Función para cerrar el modal de Github
            document.getElementById("closeModalGithub").addEventListener("click", function () {
                var modal = document.getElementById("modalGithub");
                modal.style.display = "none";
            });



            //zoom
            document.getElementById("verMasZoom").addEventListener("click", function () {
                var modal = document.getElementById("modalZoom");
                modal.style.display = "block";
            });

            // Función para cerrar el modal de Zoom
            document.getElementById("closeModalZoom").addEventListener("click", function () {
                var modal = document.getElementById("modalZoom");
                modal.style.display = "none";
            });




            //  Office
            document.getElementById("verMasOffice").addEventListener("click", function () {
                var modal = document.getElementById("modalOffice");
                modal.style.display = "block";
            });

            // Función para cerrar el modal de office
            document.getElementById("closeModalOffice").addEventListener("click", function () {
                var modal = document.getElementById("modalOffice");
                modal.style.display = "none";
            });

            // Windows
            document.getElementById("verMasWindows").addEventListener("click", function () {
                var modal = document.getElementById("modalWindows");
                modal.style.display = "block";
            });

            // Función para cerrar el modal de Windows
            document.getElementById("closeModalWindows").addEventListener("click", function () {
                var modal = document.getElementById("modalWindows");
                modal.style.display = "none";
            });




  


  });







  

  // Itera sobre el arreglo de habilidades y llena las barras de progreso
skills.forEach(skill => {
    const progressBar = document.createElement("progress");
    progressBar.value = skill.level;
    progressBar.max = 100;
  
    const skillName = document.createElement("p");
    skillName.textContent = skill.name;
  
    const skillDiv = document.createElement("div");
    skillDiv.classList.add("small-div");
    skillDiv.appendChild(progressBar);
    skillDiv.appendChild(skillName);
  
    // Agrega el div de habilidad a tu contenedor
    document.getElementById("skills").appendChild(skillDiv);
  });
  


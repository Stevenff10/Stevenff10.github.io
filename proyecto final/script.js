
// ===== SCRIPT DE CONTACTO =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");
  
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Capturamos datos del formulario
      const nombre = form.querySelector("input[type='text']").value;
      const correo = form.querySelector("input[type='email']").value;
      const mensaje = form.querySelector("textarea").value;

      // Simulación de envío (se podría conectar a backend o Google Forms)
      alert(`✅ Gracias ${nombre}, hemos recibido tu mensaje.\n\n📧 Responderemos a: ${correo}`);
      
      // Resetear formulario
      form.reset();
    });
  }
});

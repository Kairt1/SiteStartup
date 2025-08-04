<script>
  const marcaSelect = document.getElementById("marcaSelect");
  const ordenSelect = document.getElementById("ordenSelect");
  const carContainer = document.getElementById("car-container");
// Datos de los autos
const autos = [
    {
        marca: "hyundai",
        titulo: "Hyundai Elantra 2018",
        precio: 10500,
        anio: 2018,
        imagen: "hyundaielantra2018.png",
        descripcion: "Un sedán confiable y eficiente, ideal para la ciudad y viajes largos. Cómodo y muy económico.",
        tipo: "sedan" // 
    },
    {
        marca: "toyota",
        titulo: "Toyota Hilux 2017 (Doble Cabina)",
        precio: 23000,
        anio: 2017,
        imagen: "toyotahilux2017.png",
        descripcion: "La pick-up más robusta y versátil del mercado, ideal para el trabajo o la aventura.",
        tipo: "pickup" // 
    },
    {
        marca: "kia",
        titulo: "Kia Picanto 2020",
        precio: 9800,
        anio: 2020,
        imagen: "kiapicanto2020.png",
        descripcion: "Compacto y ágil, perfecto para la ciudad. Bajo consumo de combustible y fácil de estacionar.",
        tipo: "compacto" // 
    },
    {
        marca: "nissan",
        titulo: "Nissan Kicks 2019",
        precio: 14000,
        anio: 2019,
        imagen: "nissankicks2019.png",
        descripcion: "Un SUV compacto con estilo, tecnología y eficiencia. Amplio espacio interior.",
        tipo: "suv" // 
    },
    {
        marca: "toyota",
        titulo: "Toyota Corolla 2016",
        precio: 12000,
        anio: 2016,
        imagen: "toyotacorolla2016.png",
        descripcion: "El clásico sedán confiable. Duradero, eficiente y de bajo mantenimiento.",
        tipo: "sedan" // 
    },
    {
        marca: "honda",
        titulo: "Honda CR-V 2015",
        precio: 13500,
        anio: 2015,
        imagen: "hondacrv2015.png",
        descripcion: "Un SUV espacioso y versátil, con un interior cómodo y una conducción suave.",
        tipo: "suv" // 
    },
    {
        marca: "chevrolet",
        titulo: "Chevrolet Spark 2019",
        precio: 7500,
        anio: 2019,
        imagen: "chevroletsparks2019.png",
        descripcion: "Compacto y económico, ideal para moverse por la ciudad con facilidad. Diseño moderno.",
        tipo: "hatchback" // 
    },
    {
        marca: "mitsubishi",
        titulo: "Mitsubishi L200 2018 (Doble Cabina)",
        precio: 20500,
        anio: 2018,
        imagen: "mitsubishil2002018.png",
        descripcion: "Una pick-up robusta y potente, ideal para el trabajo pesado o aventuras fuera de carretera.",
        tipo: "pickup" // 
    },
    {
        marca: "suzuki",
        titulo: "Suzuki Swift 2021",
        precio: 11000,
        anio: 2021,
        imagen: "suzukiswift2021.png",
        descripcion: "Un hatchback ágil y divertido de conducir. Eficiente en consumo de combustible.",
        tipo: "hatchback" // 
    },
    {
        marca: "hyundai",
        titulo: "Hyundai Tucson 2017",
        precio: 15500,
        anio: 2017,
        imagen: "hyundaitucson2017.png",
        descripcion: "Un SUV versátil y cómodo, ideal para la familia. Amplio espacio interior.",
        tipo: "suv" // 
    }
];
// Función para renderizar las tarjetas con hover y botón Comprar
function renderAutos() {
  const marca = marcaSelect.value;
  const orden = ordenSelect.value;

  let filtrados = autos.filter(auto => marca === "todos" || auto.marca === marca);

  // Ordenar
  if (orden === "precio-asc") {
    filtrados.sort((a, b) => a.precio - b.precio);
  } else if (orden === "precio-desc") {
    filtrados.sort((a, b) => b.precio - a.precio);
  } else if (orden === "anio-asc") {
    filtrados.sort((a, b) => a.anio - b.anio);
  } else if (orden === "anio-desc") {
    filtrados.sort((a, b) => b.anio - a.anio);
  }

  carContainer.innerHTML = "";

  filtrados.forEach(auto => {
    const cardHTML = `
      <div class="col">
        <div class="card car-hover position-relative overflow-hidden">
          <img src="${auto.imagen}" class="card-img-top" alt="${auto.titulo}">
          <div class="card-body">
            <h5 class="card-title">${auto.titulo}</h5>
            <p class="card-text">Precio: $${auto.precio} | Año: ${auto.anio}</p>
          </div>
          <div class="car-info-hover bg-dark text-white p-3 position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between opacity-0" style="transition: opacity 0.3s;">
            <p>${auto.descripcion}</p>
            <button class="btn btn-primary align-self-end comprar-btn">Comprar</button>
          </div>
        </div>
      </div>
    `;
    carContainer.innerHTML += cardHTML;
  });

  // Añadir evento hover para mostrar descripción y botón
  const cards = carContainer.querySelectorAll(".card.car-hover");
  cards.forEach(card => {
    const infoHover = card.querySelector(".car-info-hover");
    card.addEventListener("mouseenter", () => {
      infoHover.style.opacity = "0.95";
    });
    card.addEventListener("mouseleave", () => {
      infoHover.style.opacity = "0";
    });
  });

  // Opcional: Evento para el botón comprar (puedes personalizar)
  carContainer.querySelectorAll(".comprar-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const carTitle = e.target.closest(".card").querySelector(".card-title").textContent;
      alert(`Has seleccionado comprar: ${carTitle}`);
    });
  });
}

// Listeners para los selects
marcaSelect.addEventListener("change", renderAutos);
ordenSelect.addEventListener("change", renderAutos);

// Renderizar al cargar
renderAutos();

// Button
const modal = document.createElement('div');
modal.innerHTML = `
  <div class="modal fade" id="comprar-${auto.id}" tabindex="-1" aria-labelledby="modalLabel-${auto.id}" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel-${auto.id}">${auto.nombre}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <img src="${auto.imagen}" class="img-fluid mb-3" alt="${auto.nombre}">
            </div>
            <div class="col-md-6">
              <p><strong>Precio:</strong> $${auto.precio}</p>
              <p><strong>Año:</strong> ${auto.anio}</p>
              <p><strong>Kilometraje:</strong> ${auto.kilometraje}</p>
              <p><strong>Estado:</strong> ${auto.estado}</p>
              <p>${auto.descripcion}</p>

              <hr>
              <h6>Forma de pago:</h6>
              <form>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="pago-${auto.id}" id="contado-${auto.id}" value="Contado" checked>
                  <label class="form-check-label" for="contado-${auto.id}">Contado</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="pago-${auto.id}" id="financiamiento-${auto.id}" value="Financiamiento">
                  <label class="form-check-label" for="financiamiento-${auto.id}">Financiamiento</label>
                </div>
                <div class="mt-3">
                  <label for="nombre-${auto.id}" class="form-label">Tu nombre:</label>
                  <input type="text" class="form-control" id="nombre-${auto.id}" placeholder="Nombre completo">
                </div>
                <div class="mt-2">
                  <label for="correo-${auto.id}" class="form-label">Correo:</label>
                  <input type="email" class="form-control" id="correo-${auto.id}" placeholder="ejemplo@correo.com">
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-success">Enviar solicitud</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
`;
document.body.appendChild(modal);

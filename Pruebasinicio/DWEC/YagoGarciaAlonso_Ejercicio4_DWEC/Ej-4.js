const DATA_URL = './Ej-4.json'; 

async function cargarRestaurantesCaceres() {
    const tbody = document.getElementById('restaurantes-body');
    const actionTh = document.getElementById('btn-cargar-restaurantes');
    if (!tbody || !actionTh) return;

    tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #00796b;">Cargando datos de OpenData Cáceres...</td></tr>';
    actionTh.textContent = "Cargando...";
    actionTh.style.cursor = "default";
    actionTh.onclick = null;

    try {
        const response = await fetch(DATA_URL);
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const raw = await response.json();

       
        let bindings = [];
        if (Array.isArray(raw)) {
            bindings = raw;
        } else if (raw.results && Array.isArray(raw.results.bindings)) {
            bindings = raw.results.bindings;
        } else {
            throw new Error('Formato de JSON no reconocido');
        }

        tbody.innerHTML = '';

        bindings.forEach((b, index) => {
            const row = tbody.insertRow();

           
            const uriVal = (b.uri && (b.uri.value || b.uri)) || '';
            const m = uriVal.match(/\/(\d+)(?:-|$)/);
            const id = m ? m[1] : (index + 1);

          
            const nombre = (b.rdfs_label && (b.rdfs_label.value || b.rdfs_label)) || 'N/A';
            const web = (b.schema_url && (b.schema_url.value || b.schema_url)) || '';
            const direccion = (b.schema_address_streetAddress && (b.schema_address_streetAddress.value || b.schema_address_streetAddress)) || 'Dirección no disponible';
            const aforo = (b.om_capacidadPersonas && (b.om_capacidadPersonas.value || b.om_capacidadPersonas)) || '---';

            // 1. ID
            const cellId = row.insertCell();
            cellId.textContent = id;
            cellId.classList.add('row-id');

            // 2. Nombre
            const cellNombre = row.insertCell();
            cellNombre.textContent = nombre;

            // 3. Web
            const cellWeb = row.insertCell();
            if (web) {
                let href = web;
                if (!/^https?:\/\//i.test(href)) href = 'http://' + href;
                let urlTexto = href.replace(/^https?:\/\//i, '');
                cellWeb.innerHTML = `<a href="${href}" target="_blank" rel="noopener noreferrer">${urlTexto}</a>`;
            } else {
                cellWeb.textContent = "---";
            }

            // 4. Dirección
            const cellDireccion = row.insertCell();
            cellDireccion.textContent = direccion;

            // 5. Aforo
            const cellAforo = row.insertCell();
            cellAforo.textContent = aforo;
        });

        actionTh.textContent = `Datos cargados (${bindings.length})`;
        actionTh.style.cursor = "default";
        actionTh.onclick = null;
    } catch (error) {
        console.error("Error al cargar los datos de la API:", error);
        tbody.innerHTML = `<tr><td colspan="5" style="color: red; text-align: center;">Error al cargar los datos: ${error.message}.</td></tr>`;
        actionTh.textContent = "Error al cargar";
        actionTh.style.cursor = "default";
        actionTh.onclick = null;
    }
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cargarRestaurantesCaceres);
} else {
    cargarRestaurantesCaceres();
}
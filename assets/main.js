const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCDnDfzCNmYB03ZTPUpaCAjw&part=snippet%2Cid&order=date&maxResults=50';
const content = null || document.getElementById('content'); //donde queremos agregar este nuevo html qu estamos transformando gracias al llamdo de la api
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '748ce0b056mshea70501f9c46a36p173ca9jsn1131cdc25808',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi,options)//le pasamos la url y las opciones que nos entrega rapiapi
    const data = await response.json();
    return data
}

//sentencia que va a permitr ejecutar nuestra funcion
(async ()=> {
   try{
    const videos = await fetchData(url);
    let view = `
    ${videos.items.map(video =>`
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>
    `).slice(0,4).join()} 
   `;
   content.innerHTML = view; //nuevo arreglo de htlm que contiene el titulo,imagen,descripcion que hemos obtenido de la api
   } catch (error){
    console.log(error);
   } 
})();
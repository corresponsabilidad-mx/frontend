export default function AddPost () {	

	const addPost = async (payload) => {
		await post("https://csm-org.herokuapp.com/blog/post", payload);
	};
      
	const onSubmit = async () => {
		await addPost(data);			
	};	
      
	return (
	
		<div className="container mb-5">
			<h2 className="secondary-color bg-transparent">-Espacio de redacción de publicación-</h2>
			<form action="" onSubmit={onSubmit} className="container">
				<div className="col-md-8">
					<label htmlFor="" className="form-label primary-color bg-transparent mb-1 text-center mt-5 p-2" style={{fontSize: "1.5rem"}}>Título de la publicación :
					</label>
					<input type="text" className="form-control input-blog"/>
					<span className="text-danger">{/*formState.errors.name?.message*/}</span>
				</div>
				<div>				
					<label htmlFor="inpFile" className="file primary-color bg-transparent mb-1 text-center mt-5 p-2" style={{fontSize: "1.5rem"}}>Cargar fotografía :</label>
					<input type="file" name="inpFile" id="inpFile" className="secondary-color input-blog"/>					
				</div>
				<div className="col-md-8">
					<label htmlFor=""className="form-label primary-color bg-transparent mb-1 text-center mt-5 p-2" style={{fontSize: "1.5rem"}}>Redactar publicación :</label>			
					<textarea type="text" cols={100} rows={20} id="" name="Novedades" placeholder="Escriba aquí lo que desea publicar" className="form-control input-blog"></textarea>			
					<span className="text-danger">{/*formState.errors.name?.message*/}</span>
				</div>		
				<div className="d-flex justify-content-center">
					<button type="submit" className= "btn btn-equipo m-auto">Crear publicación</button>
				</div>			
			</form>
	  	</div>
	);
};
      
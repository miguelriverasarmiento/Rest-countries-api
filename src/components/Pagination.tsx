interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = ({currentPage, totalPages, onPageChange}: Props) => {

    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1)
    };

    function generarPaginacion(currentPage: number, totalPages: number) {
    const rango = 2; // Cuántas páginas mostrar alrededor de la página actual
    const paginas = [];

    for (let i = 1; i <= totalPages; i++) {
        // Siempre incluir la primera, la última, y las páginas cercanas a la actual
        if (i === 1 || i === totalPages || (i >= currentPage - rango && i <= currentPage + rango)) {
        paginas.push(i);
        } else if (paginas[paginas.length - 1] !== '...') {
        // Agregar los puntos suspensivos solo si el último elemento no es ya '...'
        paginas.push('...');
        }
    }
    return paginas; // Devuelve un array como [1, 2, '...', 5, 6, 7, '...', 10]
    }

  return (
    <div className="flex gap-2 items-center justify-center">
        <button 
            onClick={handlePrevious} 
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-400 rounded disabled:opacity-50"
        >Prev
        </button>
        {generarPaginacion(currentPage, totalPages).map((page, index) => (
            <button 
                key={index} 
                onClick={() => onPageChange(page as number)} 
                disabled={page === currentPage}
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
                {page}
            </button>
        ))}
        <button 
            onClick={handleNext} 
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-400 rounded disabled:opacity-50"
        >Next
        </button>
    </div>
  )
}

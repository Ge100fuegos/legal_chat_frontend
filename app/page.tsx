import Image from 'next/image'

export default function Home() {
  return (
    <main>
      Pagina inicio
      <div className='flex flex-col items-start gap-2'>
        <input type='text' value={'input default'}/>

        <button>Boton default</button>
        
        <button className=' boton-error'>Error</button>
        
        <button className=' boton-guardar'>Guardar</button>
        
        <button className='boton-editar'>Editar</button>
      </div>
    </main>
  )
}

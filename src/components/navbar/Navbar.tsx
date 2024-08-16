import { Link, useNavigate } from 'react-router-dom'
import React from 'react'


function Navbar() {
  return (
    <>
     <div className='w-full bg-red-700 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>Farmácia</div>

            <div className='flex gap-4'>
              <div className='hover:underline'>Login</div>
              <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Produtos</div>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar

'use client';
import { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [cartoes, setCartoes] = useState([
    {
      titular: 'Thuca Alexandre',
      banco: 'Bradesco',
      bandeira: 'Visa Smiles',
      programa: 'Smiles',
      fechamento: '26/04/2025',
      vencimento: '03/05/2025',
      valor: 15800.90,
      status: 'Pago'
    },
    {
      titular: 'Thucca Boaria',
      banco: 'Bradesco',
      bandeira: 'Amex',
      programa: 'Membership Rewards',
      fechamento: '26/04/2025',
      vencimento: '03/05/2025',
      valor: 12643.22,
      status: 'Não Pago'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Painel de Cartões</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {cartoes.map((cartao, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">{cartao.banco} - {cartao.bandeira}</h2>
              <p className="text-gray-600">{cartao.titular}</p>
              <p className="text-sm text-gray-500">Fechamento: {cartao.fechamento} | Vencimento: {cartao.vencimento}</p>
              <p className="text-lg font-bold mt-2">R$ {cartao.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            </div>
            <div>
              {cartao.status === 'Pago' ? (
                <CheckCircleIcon className="h-8 w-8 text-green-500" />
              ) : (
                <XCircleIcon className="h-8 w-8 text-red-500" />
              )}
              <p className="text-sm text-center mt-1">{cartao.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

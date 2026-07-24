import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, remove, setQuantity, total, count, clear } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[70] bg-noir-950/70 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 h-full w-full sm:w-96 z-[80] glass border-l border-gold-400/20 flex flex-col transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h3 className="font-serif text-xl text-gold-300">
            Your Cart ({count})
          </h3>
          <button onClick={closeCart} aria-label="Close cart" className="text-white/60 hover:text-gold-400 transition-colors">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-white/40">
            <ShoppingBag size={48} strokeWidth={1} />
            <p className="font-light text-sm">Your cart is empty</p>
            <button onClick={closeCart} className="text-xs tracking-widest2 uppercase text-gold-400 hover:text-gold-300 transition-colors">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-5 border-b border-white/5">
                  <div className="w-20 h-24 flex-shrink-0 overflow-hidden rounded-sm">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-lg text-white">{item.name}</h4>
                      <p className="text-gold-400 text-sm font-light">${item.price}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 border border-white/10 rounded-sm">
                        <button
                          onClick={() => setQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-white/60 hover:text-gold-400 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm text-white w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => setQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-white/60 hover:text-gold-400 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => remove(item.id)}
                        className="text-white/40 hover:text-red-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-white/10 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/60 font-light">Total</span>
                <span className="font-serif text-2xl text-gold-300">${total}</span>
              </div>
              <button className="btn-gold w-full py-3.5 text-xs tracking-widest2 uppercase rounded-sm font-medium">
                Checkout
              </button>
              <button
                onClick={clear}
                className="w-full text-xs text-white/40 hover:text-white/70 transition-colors tracking-wide"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

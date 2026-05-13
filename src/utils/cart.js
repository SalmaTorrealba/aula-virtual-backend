export function getCart() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function addToCart(curso) {
  const cart = getCart();
  cart.push(curso);
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function removeFromCart(id) {
  const cart = getCart().filter((c) => c.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function clearCart() {
  localStorage.setItem("cart", "[]");
}

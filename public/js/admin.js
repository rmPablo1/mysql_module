
const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector("[name=productId]").value
  const csrf = btn.parentNode.querySelector("[name=_csrf]").value
  const productElement = btn.closest("article")
  console.log(productElement)
  fetch(`/admin/product/${prodId}`, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf
    }
  }).then(result => {
    return result.json()
  })
  .then(data => {
    return productElement.remove()
  })
  .catch(err => console.log(err))
}

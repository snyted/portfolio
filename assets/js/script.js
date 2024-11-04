function downloadFile() {
  const link = document.createElement("a");
  link.href = "Documentos/curriculo.pdf";
  link.download = "Currículo.pdf";
  link.click();
}

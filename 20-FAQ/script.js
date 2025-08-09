const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  const question = faq.querySelector(".question");

  question.addEventListener("click", () => {
    // Close all answers
    faqs.forEach(item => {
      if (item !== faq) {
        item.querySelector(".answer").classList.remove("show");
        item.querySelector(".icon").textContent = "^";
      }
    });

    // Toggle current
    const answer = faq.querySelector(".answer");
    const icon = faq.querySelector(".icon");

    answer.classList.toggle("show");
    icon.textContent = answer.classList.contains("show") ? "˅" : "^";
  });
});

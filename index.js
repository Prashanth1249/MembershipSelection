document.addEventListener("DOMContentLoaded", () => {
  const planDescriptions = {
    plan1: `<h2>Plan 1 Details</h2><p>This is an awesome plan with benefits A, B, and C.</p>`,
    plan2: `<h2>Plan 2 Details</h2><p>This plan offers extended support and better value.</p>`,
    plan3: `<h2>Plan 3 Details</h2><p>This is the premium plan with all features unlocked.</p>`,
    plan4: `<h2>Plan 4 Details</h2><p>This plan is best for small businesses.</p>`,
    plan5: `<h2>Plan 5 Details</h2><p>Affordable plan for freelancers and individuals.</p>`
  };

  const plans = document.querySelectorAll(".plan");
  const descArea = document.getElementById("descriptionArea");

  plans.forEach((plan) => {
    plan.addEventListener("click", () => {
      plans.forEach((p) => p.classList.remove("selected"));
      plan.classList.add("selected");
      const id = plan.getAttribute("data-id");
      descArea.innerHTML = planDescriptions[id] || `<p>No description available.</p>`;
    });
  });
});

function toggleSidebar() {
  document.querySelector('.page-container').classList.toggle('collapsed');
}

function toggleSidebar() {
  const container = document.querySelector('.page-container');
  const toggleBtn = document.querySelector('.sidebar-toggle');

  container.classList.toggle('collapsed');

  if (container.classList.contains('collapsed')) {
    toggleBtn.textContent = '»';
  } else {
    toggleBtn.textContent = '☰';
  }
}



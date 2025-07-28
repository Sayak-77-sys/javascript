document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");
  const clearBtn = document.getElementById("clear-expenses");
  const filterBtn = document.getElementById("filter-expenses");
  const filterInput = document.getElementById("filter-value");

  let expenses = [];

  // Submit form
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value.trim());

    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
      alert("Please enter valid expense details.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      name: expenseName,
      amount: expenseAmount,
    };

    expenses.push(newExpense);
    saveExpenses();
    renderExpenses(); // re-render entire list
    expenseForm.reset(); // Clear inputs
  });

  // Render all expenses
  function renderExpenses(filteredList = expenses) {
    expenseList.innerHTML = "";
    filteredList.forEach((expense) => {
      const li = document.createElement("li");
      li.textContent = `${expense.name}: $${expense.amount.toFixed(2)}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";

      deleteBtn.addEventListener("click", () => {
        expenses = expenses.filter((e) => e.id !== expense.id);
        saveExpenses();
        renderExpenses();
      });

      li.appendChild(deleteBtn);
      expenseList.appendChild(li);
    });

    updateTotalAmount();
  }

  // Save to localStorage
  function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  // Load from localStorage
  function loadExpenses() {
    const savedExpenses = localStorage.getItem("expenses");
    if (savedExpenses) {
      expenses = JSON.parse(savedExpenses);
    }
  }

  // Total amount
  function calculateTotal() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  function updateTotalAmount() {
    const totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  // Clear all expenses
  clearBtn?.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all expenses?")) {
      expenses = [];
      saveExpenses();
      renderExpenses();
    }
  });

  // Filter expenses
  filterBtn?.addEventListener("click", () => {
    const filterValue = filterInput?.value.trim().toLowerCase();
    const filteredExpenses = expenses.filter((exp) =>
      exp.name.toLowerCase().includes(filterValue)
    );
    renderExpenses(filteredExpenses);
  });

  // Initialize
  loadExpenses();
  renderExpenses();
});

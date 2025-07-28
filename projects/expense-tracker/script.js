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

    const existingIndex = expenses.findIndex(
      (e) => e.name === expenseName && e.amount === expenseAmount
    );

    if (existingIndex !== -1) {
      expenses[existingIndex].count += 1;
    } else {
      const newExpense = {
        id: Date.now(),
        name: expenseName,
        amount: expenseAmount,
        count: 1,
      };
      expenses.push(newExpense);
    }

    saveExpenses();
    renderExpenses();
    expenseForm.reset();
  });

  // Render all expenses
  function renderExpenses(filteredList = expenses) {
    expenseList.innerHTML = "";
    filteredList.forEach((expense) => {
      const li = document.createElement("li");

      const label =
        expense.count > 1
          ? `${expense.name} (x${expense.count}): $${(
              expense.amount * expense.count
            ).toFixed(2)}`
          : `${expense.name}: $${expense.amount.toFixed(2)}`;

      li.textContent = label;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener("click", () => {
        if (expense.count > 1) {
          expense.count -= 1;
        } else {
          expenses = expenses.filter((e) => e.id !== expense.id);
        }
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
    return expenses.reduce(
      (total, expense) => total + expense.amount * expense.count,
      0
    );
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

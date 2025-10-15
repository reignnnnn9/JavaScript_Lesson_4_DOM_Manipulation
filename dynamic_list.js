// --- Dynamic List Management Demo ---
document.addEventListener('DOMContentLoaded', function() {
    // 1. Getting references to all the DOM elements we need
    const itemInput = document.getElementById('item-input');
    const addItem = document.getElementById('add-item');
    const clearBtn = document.getElementById('clear-completed');
    const itemList = document.getElementById('item-list');
    const stats = document.getElementById('stats');

    // 2. Add item functionality - both button click and enter key
    addBtn.addEventListener('click', addItem);
    itemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addItem();
    });
    // Event delegation for dynamic buttons
    // This allows us to handle clicks on buttons that dont't exist yet
    itemList.addEventListener('click', function(e) {
        if (e.target.classList.contains('complete-button')) {
            toggleComplete(e.target);
        } else if (e.target.classList.contains('delete-button')) {
            deleteItem(e.target);
        }
    })
    clearBtn.addEventListener('click', clearCompleted);

    // 3. Functions
    function addItem() {
        // Get the text from the input and trim white space
        const text = itemInput.value.trim();
        if (!text) return; // Don't add empty items

        // Create a new list item element
        const li = document.createElement('li');
        li.className = 'list-item';
        li.innerHTML = `
            <span>${text}</span>
            <div>
                <button class="complete-button">Complete</button>
                <button class="delete-button">Delete</button>
            </div>
        `;
        // Add the new item to the list 
        itemList.appendChild(li);
        itemInput.value = ''; // Clear the input
        // Update stats
        updateStats();
    }
    
    function toggleComplete(button) {
        // Find the parent list item using closest()
        const listItem = button.closest('.list-item');
        listItem.classList.toggle('completed');

        // Change button text based on completion status
        const span = listItem.querySelector('span');
        if (listItem.classList.contains('completed')) {
            button.textContent = 'Undo';
        } else {
            button.textContent = 'Complete';
        }
        updateStats();
    }

    function deleteItem(button) {
        // Find the parent list item and remove it
        const listItem = button.closest('.list-item');
        listItem.remove();
        updateStats();
    }

    function clearCompleted() {
        // Find all completed items and remove them
        const completedItems = itemList.querySelectorAll('.list-item.completed');
        completedItems.forEach(item => item.remove());
        updateStats();
    }

    function updateStats() {
        // Calculate and display statistics
        const totalItems = itemList.children.length;
        const completedItems = itemList.querySelectorAll('.list-item.completed').length;
        const remainingItems = totalItems - completedItems;
        
        stats.innerHTML = `
            <p><strong>Stats:</strong> Total: ${totalItems} | Completed: ${completedItems} | Remaining: ${remainingItems}</p>
        `;
    }
});
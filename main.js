function analyzeRecipe() {
    const recipeText = document.getElementById('recipeInput').value;
    const allergens = document.getElementById('allergens').value;
    const medications = document.getElementById('medications').value;
  
    const resultDiv = document.getElementById('result');
    const allergenList = document.getElementById('allergenList');
  
    // Show loading message
    resultDiv.innerHTML = "🧠 Analyzing your recipe...";
    allergenList.innerHTML = "";
  
    // Simulate delay
    setTimeout(() => {
      const mockReply = `
        **Potential Allergens:**
        - Dairy (milk, butter)
        
        **Medication Conflicts:**
        - None identified
        
        **Suggestions:**
        - Replace milk with oat milk
        - Use a plant-based butter substitute
        
        This recipe looks safe with these changes!
      `;
  
      resultDiv.innerHTML = mockReply;
      allergenList.innerHTML = "Dairy (milk, butter)";
    }, 1000);
  }
  
package com.cognizant;

import java.util.ArrayList;
import java.util.List;

/**
 * A simple Shopping Cart class to demonstrate the AAA testing pattern.
 */
public class ShoppingCart {
    private List<String> items;

    public ShoppingCart() {
        this.items = new ArrayList<>();
    }

    /**
     * Adds an item to the cart.
     * @param item the name of the item
     */
    public void addItem(String item) {
        items.add(item);
    }

    /**
     * Removes an item from the cart.
     * @param item the name of the item to remove
     * @return true if the item was removed, false otherwise
     */
    public boolean removeItem(String item) {
        return items.remove(item);
    }

    /**
     * Gets the total number of items in the cart.
     * @return the size of the cart
     */
    public int getItemCount() {
        return items.size();
    }

    /**
     * Clears all items from the cart.
     */
    public void clearCart() {
        items.clear();
    }
}

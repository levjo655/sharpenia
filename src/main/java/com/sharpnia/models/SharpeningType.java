package com.sharpnia.models;

public enum SharpeningType {
    EDGE_SHARPENING("Sharpening", PricingUnit.PER_BLADE, 17.0),
    THINNING("Thinning", PricingUnit.PER_HOUR, 25.0),
    POLISHING("Polishing", PricingUnit.PER_HOUR, 25.0);

    private final String label;
    private final PricingUnit unit;
    private final double price;

    SharpeningType(String label, PricingUnit unit, double price) {
        this.label = label;
        this.unit = unit;
        this.price = price;
    }

    public String getLabel() {
        return label;
    }

    public PricingUnit getUnit() {
        return unit;
    }

    public double getPrice() {
        return price;
    }
}

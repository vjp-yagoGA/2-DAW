Console.Write("Package weight (kg): ");
string? input = Console.ReadLine();
if (!double.TryParse(input, out double weightKg) || weightKg <= 0)
{
	Console.WriteLine("Invalid package weight.");
	return;
}

const double baseCost = 3.50;
const double costPerkg = 0.80;
double totalCost = baseCost + (weightKg * costPerkg);

Console.WriteLine($"Shipping cost: {totalCost:C2}");
Console.WriteLine($"Lbs: {KgToLib(weightKg):F2}");

double KgToLib(double weight)
{
	return weight * 2.20462;
}


Console.Write("Enter quantity for SKU-4471: ");
string? rawQuantity = Console.ReadLine();
if (!int.TryParse(rawQuantity, out int quantity) || quantity <= 0)
{
	Console.WriteLine("Invalid quantity. Order line rejected.");
	return;
}

if (quantity > 500)
{
	Console.WriteLine("Quantity exceeds the maximum of 500 units. Order line rejected.");
	return;
}

Console.Write("Enter item weight (kg): ");
string? rawWeight = Console.ReadLine();
if (!double.TryParse(rawWeight, out double itemWeight) || itemWeight <= 0)
{
	Console.WriteLine("Invalid item weight. Order line rejected.");
	return;
}

Console.WriteLine($"Added {quantity} units of SKU-4471 ({itemWeight:F2} kg each) to the order.");


decimal CalculateDiscount(Customer? customer, Order? order)
{
	if (customer == null)
	{
		Console.WriteLine("Null customer");
		return 0;
	}

	if (!customer.Active)
	{
		Console.WriteLine("Inactive customer");
		return 0;
	}

	if (order == null)
	{
		Console.WriteLine("Null order");
		return 0;
	}

	if (order.Total == 0)
	{
		Console.WriteLine("Free order");
		return 0;
	}

	if (order.Total < 0)
	{
		Console.WriteLine("Order has no total");
		return 0;
	}

	decimal discountRate = (customer.CustomerType, (decimal)order.Total) switch
	{
		(CustomerType.Regular, > 500m) => 0.10m,
		(CustomerType.Regular, _) => 0.05m,
		(CustomerType.Vip, > 1000m) => 0.25m,
		(CustomerType.Vip, > 500m) => 0.15m,
		(CustomerType.Vip, _) => 0.10m,
		_ => 0m
	};

	return order.Total * discountRate;
}

class Customer
{
	public bool Active { get; internal set; }
	public CustomerType CustomerType { get; internal set; }
}

enum CustomerType
{
	Regular,
	Vip
}

class Order
{
	public int Total { get; internal set; }
}
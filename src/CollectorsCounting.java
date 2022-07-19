import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;
public class CollectorsCounting {

    public static void main(String[] args) {
        List<Product> products = new ArrayList<>();
        products.add(new Product("11", "perfume", "fragrance", 13));
        products.add(new Product("12", "cereals muesli fruit nuts", "groceries", 50));
        products.add(new Product("13", "Hyaluronic Acid Serum", "skincare", 23));
        products.add(new Product("14", "Eau De Perfume Spray", "fragrance", 40));
        products.add(new Product("15", "Tree Oil 30ml", "skincare", 9));

        Map<String, Long> groupedProductCount = products.stream().collect(Collectors.groupingBy((product) -> product.category, Collectors.counting()));

        System.out.println(groupedProductCount);
    }
}

package JavaTask;


import java.util.Random;

public class Program1 {

    public static void main(String[] args)
    {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};
        int n = originalArray.length;
        Random random = new Random();

        for (int i = n - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            int temp = originalArray[i];
            originalArray[i] = originalArray[j];
            originalArray[j] = temp;
        }

        for (int value : originalArray) {
            System.out.print(value + " ");
        }
    }
}



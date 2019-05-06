/**
 * ID 计数器
 */
export class IdCounter {
    private static num = 0;
    public static newId(profix?: string) {
        if (profix != null) {
            return profix + '-' + (++IdCounter.num);
        } else {
            return 'key-' + (++IdCounter.num);
        }
    }
}

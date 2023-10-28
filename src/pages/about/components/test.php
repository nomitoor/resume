<?php
class StatClass {
    private $data = [];

    public function __construct() {
        $this->data = func_get_args();
    }

    public function __destruct() {
        $typeFrequencies = $this->calculateTypeFrequencies();
        arsort($typeFrequencies);
        print_r($typeFrequencies);
    }

    private function calculateTypeFrequencies() {
        $typeFrequencies = [];
        foreach ($this->data as $param) {
            $type = gettype($param);
            if (array_key_exists($type, $typeFrequencies)) {
                $typeFrequencies[$type]++;
            } else {
                $typeFrequencies[$type] = 1;
            }
        }
        return $typeFrequencies;
    }
}

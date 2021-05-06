<?php

namespace App\Http\Services;

use App\Address;
use Exception;
use Illuminate\Support\Facades\Log;

class AddressService
{
    public static function find(int $id): Address
    {
        try {
            return Address::find($id);
        } catch (Exception $e) {
            throw new Exception("Erro ao buscar endereço");
            Log::error($e->getMessage());
        }
    }

    public static function store(array $data, int $id): Address
    {
        try {
            $data['user_id'] = $id;
            return Address::create($data);
        } catch (Exception $e) {
            throw new Exception("Erro ao cadastrar endereço");
            Log::error($e->getMessage());
        }
    }
    
    public static function update(array $data, int $id): Address
    {
        try {
            $address = self::find($id);
            $address->update($data);
            return $address;
        } catch (Exception $e) {
            throw new Exception("Erro ao atualizar endereço");
            Log::error($e->getMessage());
        }
    }
}
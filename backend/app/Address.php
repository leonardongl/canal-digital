<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'user_id', 
        'cep', 
        'number', 
        'street', 
        'complement', 
        'district', 
        'city', 
        'state'
    ];

    public function user()
    {
        $this->belongsTo(User::class);
    }
}

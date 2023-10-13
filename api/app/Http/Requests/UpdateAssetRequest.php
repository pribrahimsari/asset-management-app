<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;

class UpdateAssetRequest extends StoreAssetRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name"=>"nullable|string|max:255",
            "description"=>"nullable|string|max:1000",
            "type_id"=>"nullable|exists:App\Models\Type,id",
            "addition_time"=>"nullable|date",
            'priority' => [
                'nullable',
                Rule::in(["Low", "Medium", "High"]),
            ],
        ];
    }
}

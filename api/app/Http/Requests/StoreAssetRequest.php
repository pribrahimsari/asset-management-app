<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreAssetRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        // since our mini app has not a authorization logic, return true for now
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name"=>"required|string|max:255",
            "description"=>"nullable|string|max:1000",
            "type_id"=>"required|exists:App\Models\Type,id",
            "addition_time"=>"nullable|date",
            'priority' => [
                'required',
                Rule::in(["Low", "Medium", "High"]),
            ],
        ];
    }
}

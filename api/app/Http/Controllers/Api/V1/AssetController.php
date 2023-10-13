<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Asset;
use Illuminate\Http\Request;
use App\Http\Resources\AssetResource;
use App\Http\Requests\StoreAssetRequest;

class AssetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // todo: pagination
        return AssetResource::collection(Asset::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAssetRequest $request)
    {
        //
        $asset = Asset::create($request->validated());
        return AssetResource::make($asset);
    }

    /**
     * Display the specified resource.
     */
    public function show(Asset $asset)
    {
        //
        return AssetResource::make($asset);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Asset $asset)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Asset $asset)
    {
        //
    }
}
